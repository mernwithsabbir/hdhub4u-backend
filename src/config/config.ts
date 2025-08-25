import { config as conf } from "dotenv";
conf();

const _config = {
  PORT: process.env.PORT || 3000,
  MONGO_URI: process.env.MONGO_URI || "mongodb://localhost:27017/guidApi",
  NODE_ENV: process.env.NODE_ENV || "development",
  COOKIE_DOMAIN: process.env.COOKIE_DOMAIN || undefined,
  JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET || "defaultAccessSecret",
  JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET || "defaultAccessSecret",
  ACCESS_TOKEN_EXPIRES_IN: process.env?.ACCESS_TOKEN_EXPIRES_IN || "15m",
  REFRESH_TOKEN_EXPIRES_IN: process.env?.REFRESH_TOKEN_EXPIRES_IN || "7d",
};

export const config = Object.freeze(_config);
