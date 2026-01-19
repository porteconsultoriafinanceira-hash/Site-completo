import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import checkoutRoutes from "./routes/checkout.routes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", checkoutRoutes);

app.get("/", (req, res) => {
  res.send("API rodando com sucesso");
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("Servidor rodando na porta " + PORT);
});
