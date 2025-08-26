import express from "express";
import helmet from "helmet";
import cors from "cors";
import hpp from "hpp";
import cookieParser from "cookie-parser";
import rateLimit from "express-rate-limit";
import { errorHandler, NotFound } from "./middleware/globalErrorHandler";
import apiRouter from "./api/api";
const app = express();

app.use(helmet());
app.use(hpp());
app.use(cors());

app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 30 }));
app.use(cookieParser());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.set("etag", false);

// Api Routers
app.use(apiRouter);
// Global Error Handler
app.use(NotFound);
app.use(errorHandler);

export default app;
