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

export const setAuthCookies = (
  res: Response,
  accessToken: string,
  refreshToken: string
) => {
  const AccessExp = parseDuration(config.ACCESS_TOKEN_EXPIRES_IN as Duration);
  const RefreshExp = parseDuration(config.REFRESH_TOKEN_EXPIRES_IN as Duration);
  res.cookie("accessToken", accessToken, {
    ...setCookieOption(),
    maxAge: AccessExp,
  });
  res.cookie("refreshToken", refreshToken, {
    ...setCookieOption(),
    maxAge: RefreshExp,
  });
};
export const clearAuthCookies = (res: Response) => {
  res.clearCookie("accessToken", setCookieOption());
  res.clearCookie("refreshToken", setCookieOption());
};
