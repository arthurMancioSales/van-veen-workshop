import crypto from "crypto";

import axios, { AxiosResponse } from "axios";
import corsLib from "cors";
import * as functions from "firebase-functions";

import { HTTPResponse } from "../types";
import { PaymentResponse } from "../types/paymentResponse";

const cors = corsLib({
  // origin:
  //   [
  //     "https://workshop.vanveen.com.br",
  //     "https://workshop.institutovanveen.com.br"
  //   ],
  origin: true,
});

export const paymentWebhook = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    if (req.method !== "POST") {
      const response: HTTPResponse<undefined> = {
        status: 405,
        message: "Método não permitido",
        error: true,
      };
      res.status(405).send(response);
      return;
    }

    const xSignature = req.headers["x-signature"] as string;

    if (!xSignature) {
      const response: HTTPResponse<undefined> = {
        status: 400,
        message: "Assinatura não fornecida",
        error: true,
      };
      res.status(400).send(response);
      return;
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

    const sha = hmac.digest("hex");

    if (sha !== hash) {
      const response: HTTPResponse<undefined> = {
        status: 403,
        message: "Assinatura inválida",
        error: true,
      };
      res.status(403).send(response);
      return;
    }

    const paymentInfo: AxiosResponse<PaymentResponse> = await axios.get(
      `https://api.mercadopago.com/v1/payments/${req.body.data.id}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.MERCADO_PAGO_TEST_ACCESS_TOKEN}`,
        },
      },
    );

    return res.status(200).send({
      status: 200,
      message: "Webhook processado com sucesso",
      data: paymentInfo.data,
      error: false,
    });

    // const token = uuidv4();

    // await admin.firestore().collection("tickets").add({
    //   email,
    //   nome,
    //   status: TicketStatus.paid,
    //   token,
    //   criadoEm: admin.firestore.FieldValue.serverTimestamp(),
    //   used_at: null,
    //   singleUse: true,
    //   used: false,
    // });

    // res.status(200).send({ token });
    // return;
  });
});

module.exports = { paymentWebhook };
