import express from "express";
import cors from "cors";
import mercadopago from "mercadopago";

const app = express();
app.use(cors());
app.use(express.json());

mercadopago.configure({
  access_token: process.env.MP_ACCESS_TOKEN
});

/* ======================
   DIAGNÓSTICO – R$ 27
====================== */
app.post("/checkout/diagnostico", async (req, res) => {
  try {
    const preference = {
      items: [
        {
          title: "Diagnóstico Financeiro",
          quantity: 1,
          currency_id: "BRL",
          unit_price: 27.00
        }
      ],
      auto_return: "approved"
    };

    const response = await mercadopago.preferences.create(preference);
    res.json({ url: response.body.init_point });

  } catch (error) {
    res.status(500).json({ error: "Erro no checkout diagnóstico" });
  }
});

/* ======================
   MANUAL – R$ 167
====================== */
app.post("/checkout/manual", async (req, res) => {
  try {
    const preference = {
      items: [
        {
          title: "Manual Financeiro",
          quantity: 1,
          currency_id: "BRL",
          unit_price: 167.00
        }
      ],
      auto_return: "approved"
    };

    const response = await mercadopago.preferences.create(preference);
    res.json({ url: response.body.init_point });

  } catch (error) {
    res.status(500).json({ error: "Erro no checkout manual" });
  }
});

app.listen(3333, () => {
  console.log("Servidor rodando na porta 3333");
});
