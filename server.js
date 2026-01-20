// backend/server.js
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const axios = require('axios'); // se usar para chamadas Mercado Livre
require('dotenv').config();     // permite usar .env localmente

const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ---------- ROTAS DA API ----------
// Exemplo: rota teste
app.get('/api/ping', (req, res) => {
  res.json({ message: 'Pong!' });
});

// Exemplo de integração Mercado Livre
// (modifique de acordo com sua lógica)
app.get('/api/mercadolivre/token', async (req, res) => {
  const clientId = process.env.MERCADO_LIVRE_CLIENT_ID;
  const clientSecret = process.env.MERCADO_LIVRE_CLIENT_SECRET;
  const redirectUri = process.env.MERCADO_LIVRE_REDIRECT_URI;

  // Aqui você faria sua lógica de OAuth com ML
  res.json({ clientId, clientSecret, redirectUri });
});

// ---------- SERVIR FRONTEND REACT ----------
const frontendPath = path.join(__dirname, '../frontend/build');
app.use(express.static(frontendPath));

// SPA fallback (React Router)
app.get('*', (req, res) => {
  res.sendFile(path.join(frontendPath, 'index.html'));
});

// ---------- START SERVER ----------
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
