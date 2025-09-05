import express from "express";
import routes from "./routes.js";

const app = express();

// usar o router
app.use(routes);

// Indicar para o express ler Body JSON
app.use(express.json());

export default app;
