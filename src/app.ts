import express from "express";
import path from "path";
import helmet from "helmet";
import cors from "cors";
import hpp from "hpp";
import cookieParser from "cookie-parser";
import rateLimit from "express-rate-limit";
import apiRouter from "./api/api";
import { errorHandler, NotFound } from "./middleware/globalErrorHandler";

const app = express();

// -------------------
// 1. Security & parser
// -------------------
app.use(helmet());
app.use(hpp());
app.use(cors());
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 30 }));
app.use(cookieParser());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "30mb" }));
app.set("etag", false);

// -------------------
// 2. Static file routes
// -------------------
app.use("/avatar", express.static(path.join(__dirname, "../public/avatar")));
app.use(
  "/screenshots",
  express.static(path.join(__dirname, "../public/screenshots"))
);
app.use(
  "/trailers",
  express.static(path.join(__dirname, "../public/trailers"))
);

// -------------------
// 3. API routes
// -------------------
app.use(apiRouter);

// -------------------
// 4. Not found & error handler
// -------------------
app.use(NotFound);
app.use(errorHandler);

export default app;
