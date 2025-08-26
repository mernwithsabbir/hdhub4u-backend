import { CookieOptions, Response } from "express";
import { Duration, parseDuration } from "@alwatr/parse-duration";
import { config } from "../config/config";

const setCookieOption = () => {
  const isProd = config.NODE_ENV === "production";
  const domain = config.COOKIE_DOMAIN;

  return <CookieOptions>{
    httpOnly: true,
    secure: isProd,
    domain: domain,
    sameSite: isProd ? "lax" : "lax",
    path: "/",
  };
};

export const setAuthCookies = (res: Response, token: string) => {
  const AccessExp = parseDuration(config.JWT_EXPIRES_IN as Duration);

  res.cookie("token", token, {
    ...setCookieOption(),
    maxAge: AccessExp,
  });
};
export const clearAuthCookies = (res: Response) => {
  res.clearCookie("token", setCookieOption());
};
