import corsLib from "cors";
import * as functions from "firebase-functions";
import * as jwt from "jsonwebtoken";

import { HTTPResponse } from "../../types";
import { AuthenticateUserProps } from "../../types/auth";
import { authenticateUserRequestSchema } from "../../validations/auth/authenticateUserRequestValidation";

const cors = corsLib({
  origin: ["http://localhost:3000"],
  credentials: true,
});

const secret = process.env.PASSWORD_SECRET || "default_secret_key";

export const login = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    res.setHeader("Access-Control-Allow-Origin", req.headers.origin || "");
    res.setHeader("Access-Control-Allow-Credentials", "true");

    if (req.method === "OPTIONS") {
      res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
      res.setHeader(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization",
      );
      const response: HTTPResponse<undefined> = {
        status: 204,
        message: "No Content",
        error: false,
      };
      res.status(204).send(response);
      return;
    }

    if (req.method !== "POST") {
      res.setHeader("Access-Control-Allow-Origin", req.headers.origin || "");
      res.setHeader("Access-Control-Allow-Credentials", "true");
      const response: HTTPResponse<undefined> = {
        status: 405,
        message: "Method not allowed",
        error: true,
      };
      res.status(405).send(response);
    }

    const { password }: AuthenticateUserProps = req.body;

    try {
      authenticateUserRequestSchema.validateSync({ password });
    } catch (error) {
      res.setHeader("Access-Control-Allow-Origin", req.headers.origin || "");
      res.setHeader("Access-Control-Allow-Credentials", "true");
      const response: HTTPResponse<undefined> = {
        status: 400,
        message:
          error instanceof Error ? error.message : "Invalid request data",
        error: true,
      };

      res.status(400).send(response);
      return;
    }

    if (password !== process.env.ADMIN_PASSWORD) {
      res.setHeader("Access-Control-Allow-Origin", req.headers.origin || "");
      res.setHeader("Access-Control-Allow-Credentials", "true");
      const response: HTTPResponse<undefined> = {
        status: 403,
        message: "Access denied",
        error: true,
      };
      res.status(403).send(response);
      return;
    }

    const token = jwt.sign({ role: "admin" }, secret, {
      expiresIn: "7d",
    });

    res.setHeader(
      "Set-Cookie",
      // adminToken=${token}; HttpOnly; Path=/; Max-Age=604800; Secure; SameSite=Strict,
      `"adminToken=${token}; Path=/; HttpOnly; SameSite=None`,
    );

    res.setHeader("Access-Control-Allow-Origin", req.headers.origin || "");
    res.setHeader("Access-Control-Allow-Credentials", "true");

    const response: HTTPResponse<undefined> = {
      status: 200,
      message: "Usuário autenticado com sucesso",
      error: false,
    };

    res.status(200).send(response);
    return;
  });
});
