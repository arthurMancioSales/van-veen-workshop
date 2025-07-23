import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "@firebase/firestore";
import axios, { AxiosResponse } from "axios";
import corsLib from "cors";
import * as functions from "firebase-functions";
import { PaymentResponse } from "mercadopago/dist/clients/payment/commonTypes";

import { newTicket } from "../../factories/ticket";
import { HTTPResponse } from "../../types";
import { Ticket } from "../../types/tickets";
import { db } from "../../utils/firebaseClient";

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

    const response: AxiosResponse<PaymentResponse> = await axios.get(
      `https://api.mercadopago.com/v1/payments/${req.body.data.id}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.MERCADO_PAGO_TEST_ACCESS_TOKEN}`,
        },
      },
    );

    const paymentInfo = response.data;

    if (!paymentInfo || !paymentInfo.id) {
      const response: HTTPResponse<undefined> = {
        status: 400,
        message: "Pagamento não encontrado",
        error: true,
      };
      res.status(400).send(response);
      return;
    }

    const ticketsRef = collection(db, "tickets");

    const q = query(
      ticketsRef,
      where("payment_id", "==", paymentInfo.id.toString()),
    );
    const snapshot = await getDocs(q);

    if (snapshot.empty) {
      const ticket: Omit<Ticket, "id"> = newTicket({
        birthdate: 0,
        email: paymentInfo.payer?.email || "",
        name:
          paymentInfo.payer?.first_name + " " + paymentInfo.payer?.last_name ||
          "",
        phone:
          `${paymentInfo.payer?.phone?.area_code}` +
            `${paymentInfo.payer?.phone?.number}` || "",
        status: paymentInfo.status as Ticket["status"],
        state: paymentInfo.payer?.address?.zip_code || "",
        city: paymentInfo.payer?.address?.zip_code || "",
        singleUse:
          paymentInfo.transaction_amount === process.env.SIMPLE_TICKET_PRICE,
        used: false,
        payment_id: paymentInfo.id.toString(),
      });

      await addDoc(ticketsRef, ticket);
    }

    try {
      await setDoc(doc(db, "tickets", snapshot.docs[0].id), {
        status: paymentInfo.status as Ticket["status"],
      });
    } catch {
      const response: HTTPResponse<undefined> = {
        status: 500,
        message: "Erro ao atualizar o status do ticket",
        error: true,
      };
      res.status(500).json(response);
      return;
    }

    const WebhookResponse: HTTPResponse<undefined> = {
      status: 200,
      message: "Webhook processado com sucesso",
      error: false,
    };

    res.status(200).json(WebhookResponse);
    return;
  });
});

module.exports = { paymentWebhook };
