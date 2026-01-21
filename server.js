import express from "express";
import cors from "cors";
import mercadopago from "mercadopago";
import path from "path";
import { fileURLToPath } from "url";

if (!process.env.MP_ACCESS_TOKEN) {
  console.error("❌ MP_ACCESS_TOKEN não definido");
  process.exit(1);
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors());
app.use(express.json());

mercadopago.configure({
  access_token: process.env.MP_ACCESS_TOKEN
});

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
      sandbox: true,
      back_urls: {
        success: "https://SEU-DOMINIO.up.railway.app/diagnostico?status=approved",
        failure: "https://SEU-DOMINIO.up.railway.app/diagnostico?status=failure",
        pending: "https://SEU-DOMINIO.up.railway.app/diagnostico?status=pending"
      },
      auto_return: "approved"
    };

    const response = await mercadopago.preferences.create(preference);

    res.json({
      id: response.body.id,
      init_point: response.body.sandbox_init_point
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao criar preferência" });
  }
});

app.use(express.static(path.join(__dirname, "dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log("🚀 Server rodando na porta", PORT);
});
