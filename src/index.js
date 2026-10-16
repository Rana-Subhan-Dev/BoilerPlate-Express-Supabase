import dotenv from "dotenv";
dotenv.config();

import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import routes from "./routes/index.js";
import supabase from "./config/supabase.js";
import logger, { morganStream } from "./utils/logger.js";

const app = express();
const corsOptions = {
  origin: ["*"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(morgan(":method :url :status :res[content-length] - :response-time ms", { stream: morganStream }));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

// Static files (public/index.html, favicon, etc.)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "public")));

// API routes
app.use('/v1/api', routes);

/* eslint-disable no-undef */
app.get("/health", async (_req, res) => {
  const { error } = await supabase.from("users").select("id").limit(1);
  res.status(200).json({
    status: "ok",
    environment: process.env.NODE_ENV || "development",
    timestamp: new Date().toISOString(),
    db: {
      status: error ? "disconnected" : "connected",
    },
  });
});


app.get("/", (_req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

/* eslint-disable no-undef */
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => logger.info(`Server Running on Port: ${PORT}`));
