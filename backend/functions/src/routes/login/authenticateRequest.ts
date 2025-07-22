import * as functions from "firebase-functions";
import * as jwt from "jsonwebtoken";

import { HTTPResponse } from "../../types";

const secret = process.env.PASSWORD_SECRET || "default_secret_key";

export function authenticateRequest(
  req: functions.https.Request,
  res: any,
): string | null {
  const token = req.headers.authorization?.replace("Bearer ", "");

  if (!token) {
    const response: HTTPResponse<undefined> = {
      status: 401,
      message: "Token de autenticação não fornecido",
      error: true,
    };
    res.status(401).json(response);
    return null;
  }

  try {
    const decoded = jwt.verify(token, secret);
    return typeof decoded === "string" ? null : decoded.role;
  } catch {
    const response: HTTPResponse<undefined> = {
      status: 401,
      message: "Token inválido ou expirado",
      error: true,
    };
    res.status(401).json(response);
    return null;
  }
}
