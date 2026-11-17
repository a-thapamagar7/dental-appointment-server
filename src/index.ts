// app.ts
import express from "express";
import helmet from "helmet";
import cors from "cors";

export const app = express();

app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_ORIGIN, methods: ["POST"] }));
app.use(express.json({ limit: "10kb" }));

app.use((_req, res) => {
  res.status(404).json({ status: "error", message: "Not found" });
});
