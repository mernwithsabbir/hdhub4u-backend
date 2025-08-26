import { ITokenPayload } from "./token";

declare global {
  namespace Express {
    interface Request {
      user?: ITokenPayload;
    }
  }
}
