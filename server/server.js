import "dotenv/config";
import express from "express";
import cors from "cors";
import mercadopago from "mercadopago";

const app = express();

app.use(cors());
app.use(express.json());

if (!process.env.MP_ACCESS_TOKEN) {
  console.error("❌ MP_ACCESS_TOKEN não definido");
  process.exit(1);
}

mercadopago.configure({
  access_token: process.env.MP_ACCESS_TOKEN,
});

// Exemplo de endpoint
app.post("/api/create-preference", async (req, res) => {
  try {
    const preference = {
      items: [
        {
          title: "Diagnóstico Financeiro",
          quantity: 1,
          unit_price: 27.0,
        },
      ],
      payment_methods: {
        excluded_payment_types: [],
        installments: 12,
      },
      back_urls: {
        success: "https://seusite.com/sucesso",
        failure: "https://seusite.com/erro",
      },
      auto_return: "approved",
    };

    const response = await mercadopago.preferences.create(preference);
    res.json({ id: response.body.id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao criar pagamento" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server rodando na porta ${PORT}`);
});

