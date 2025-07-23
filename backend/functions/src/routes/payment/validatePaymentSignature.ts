import crypto from "crypto";

import * as functions from "firebase-functions";

import { HTTPResponse } from "../../types";

export function validatePaymentSignature(
  req: functions.https.Request,
  res: any,
): boolean {
  const xSignature = req.headers["x-signature"] as string;

  if (!xSignature) {
    const response: HTTPResponse<undefined> = {
      status: 400,
      message: "Assinatura não fornecida",
      error: true,
    };
    res.status(400).send(response);
    return false;
  }

  const xRequestId = req.headers["x-request-id"];

  const urlParams = new URLSearchParams(req.url.split("?")[1]);
  const dataID = urlParams.get("data.id");

  const parts: string[] = xSignature.split(",");

  let ts: string | undefined;
  let hash: string | undefined;

  parts.forEach((part) => {
    const [key, value] = part.split("=");
    if (key && value) {
      const trimmedKey = key.trim();
      const trimmedValue = value.trim();
      if (trimmedKey === "ts") {
        ts = trimmedValue;
      } else if (trimmedKey === "v1") {
        hash = trimmedValue;
      }
    }
  });

  const manifest = `id:${dataID};request-id:${xRequestId};ts:${ts};`;
  const hmac = crypto.createHmac(
    "sha256",
    `${process.env.MERCADO_PAGO_WEBHOOK_SECRET}`,
  );
  hmac.update(manifest);

  try {
    const sha = hmac.digest("hex");

    if (sha !== hash) {
      const response: HTTPResponse<undefined> = {
        status: 403,
        message: "Assinatura inválida",
        error: true,
      };
      res.status(403).send(response);
      return false;
    }
    return true;
  } catch {
    const response: HTTPResponse<undefined> = {
      status: 401,
      message: "Token inválido ou expirado",
      error: true,
    };
    res.status(401).json(response);
    return false;
  }
}
