import express from "express";
import cors from "cors";
import mercadopago from "mercadopago";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors());
app.use(express.json());

mercadopago.configure({
  access_token: process.env.MP_ACCESS_TOKEN
});

// 🔥 ENDPOINT DO PAGAMENTO
app.post("/api/create-preference", async (req, res) => {
  try {
    const preference = {
      items: [
        {
          title: "Diagnóstico Financeiro",
          quantity: 1,
          unit_price: 100
        }
      ],
      back_urls: {
        success: "https://google.com",
        failure: "https://google.com"
      },
      auto_return: "approved"
    };

    const response = await mercadopago.preferences.create(preference);
    res.json({ id: response.body.id });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao criar preferência" });
  }
});

// 👉 Servir o frontend buildado
app.use(express.static(path.join(__dirname, "dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("🚀 Server rodando na porta", PORT);
});
