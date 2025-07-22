import corsLib from "cors";
import * as functions from "firebase-functions";
import * as jwt from "jsonwebtoken";

import { HTTPResponse } from "../../types";
import { AuthenticateUserProps } from "../../types/auth";
import { authenticateUserRequestSchema } from "../../validations/auth/authenticateUserRequestValidation";

// Configuração CORS mais explícita
const corsOptions = {
  origin: "http://localhost:3000",
};

const cors = corsLib(corsOptions);
const secret = process.env.PASSWORD_SECRET || "default_secret_key";

export const login = functions.https.onRequest((req, res) => {
  return cors(req, res, async () => {
    if (req.method === "OPTIONS") {
      res.status(204).send();
      return;
    }

    if (req.method !== "POST") {
      const response: HTTPResponse<undefined> = {
        status: 405,
        message: "Method not allowed",
        error: true,
      };
      res.status(405).json(response);
      return;
    }

    const { password }: AuthenticateUserProps = req.body;

    try {
      authenticateUserRequestSchema.validateSync({ password });
    } catch (error) {
      const response: HTTPResponse<undefined> = {
        status: 400,
        message:
          error instanceof Error ? error.message : "Invalid request data",
        error: true,
      };
      res.status(400).json(response);
      return;
    }

    if (password !== process.env.ADMIN_PASSWORD) {
      const response: HTTPResponse<undefined> = {
        status: 403,
        message: "Access denied",
        error: true,
      };
      res.status(403).json(response);
      return;
    }

    const token = jwt.sign({ role: "admin" }, secret, {
      expiresIn: "7d",
    });

    const response: HTTPResponse<{ token: string }> = {
      status: 200,
      message: "Usuário autenticado com sucesso",
      error: false,
      data: { token },
    };

    res.status(200).json(response);
  });
});
