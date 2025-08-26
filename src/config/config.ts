import { config as conf } from "dotenv";
conf();

const _config = {
  PORT: process.env.PORT || 8000,
  MONGO_URI: process.env.MONGO_URI || "mongodb://localhost:27017/guidApi",
  NODE_ENV: process.env.NODE_ENV || "development",
  COOKIE_DOMAIN: process.env.COOKIE_DOMAIN || undefined,
  JWT_SECRET: process.env.JWT_SECRET || "defaultAccessSecret",
  JWT_EXPIRES_IN: process.env?.JWT_EXPIRES_IN || "7d",
};

export const config = Object.freeze(_config);
