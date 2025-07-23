import axios, { AxiosResponse } from "axios";
import corsLib from "cors";
import * as functions from "firebase-functions";
import { PaymentResponse } from "mercadopago/dist/clients/order/commonTypes";

import { HTTPResponse } from "../../types";

import { validatePaymentSignature } from "./validatePaymentSignature";

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

    const isValid = validatePaymentSignature(req, res);
    if (!isValid) return;

    const paymentInfo: AxiosResponse<PaymentResponse> = await axios.get(
      `https://api.mercadopago.com/v1/payments/${req.body.data.id}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.MERCADO_PAGO_TEST_ACCESS_TOKEN}`,
        },
      },
    );

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
