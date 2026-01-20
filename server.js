import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import checkoutRoutes from "./routes/checkout.routes.js";

const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
  console.log('Server running on port', PORT);
});
