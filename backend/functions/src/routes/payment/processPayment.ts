import { addDoc, collection } from "@firebase/firestore";
import corsLib from "cors";
import * as functions from "firebase-functions";
import { MercadoPagoConfig, Payment } from "mercadopago";
import { v4 } from "uuid";

import { newTicket } from "../../factories/ticket";
import { HTTPResponse } from "../../types";
import { NewTicket, Ticket } from "../../types/tickets";
import { db } from "../../utils/firebaseClient";
import { verifyExistingDoc } from "../../utils/verifyExistingDoc";
import { newTicketRequestSchema } from "../../validations/tickets/newTicketRequestValidation";

// Configuração CORS mais explícita
const corsOptions = {
  origin: true,
};

const cors = corsLib(corsOptions);

export const process_payment = functions.https.onRequest((req, res) => {
  return cors(req, res, async () => {
    if (req.method !== "POST") {
      const response: HTTPResponse<undefined> = {
        status: 405,
        message: "Method not allowed",
        error: true,
      };
      res.status(405).json(response);
      return;
    }

    const ticketData: NewTicket = req.body;

    try {
      newTicketRequestSchema.validateSync(ticketData);
    } catch (error) {
      const response: HTTPResponse<undefined> = {
        status: 400,
        message:
          error instanceof Error ? error.message : "Invalid request data",
        error: true,
      };

      return res.status(400).send(response);
    }

    const client = new MercadoPagoConfig({
      accessToken: `${process.env.MERCADO_PAGO_TEST_ACCESS_TOKEN}`,
      options: { timeout: 5000, idempotencyKey: v4() },
    });

    const payment = new Payment(client);

    payment
      .create({ body: req.body.formData })
      .then(async (result) => {
        const ticketsRef = collection(db, "tickets");

        if (!result || !result.id) {
          const response: HTTPResponse<undefined> = {
            status: 500,
            message: "Erro ao processar pagamento",
            error: true,
          };
          res.status(500).json(response);
          return;
        }

        const ticket: Omit<Ticket, "id"> = newTicket({
          birthdate: ticketData.birthdate,
          email: ticketData.email,
          name: ticketData.name,
          phone: ticketData.phone,
          status: result.status as Ticket["status"],
          state: ticketData.state,
          city: ticketData.city,
          singleUse: ticketData.singleUse,
          used: ticketData.used,
          payment_id: result.id.toString(),
        });

        try {
          const existingDoc = await verifyExistingDoc(
            ticketsRef,
            ticketData.phone,
            ticketData.email,
          );

          if (existingDoc.error) {
            res.status(existingDoc.status).json(existingDoc);
            return;
          }

          await addDoc(ticketsRef, ticket);
        } catch (error) {
          const response: HTTPResponse<undefined> = {
            status: 500,
            message:
              "Error creating ticket" +
              (error instanceof Error ? `: ${error.message}` : ""),
            error: true,
          };
          res.status(500).json(response);
          return;
        }

        const response: HTTPResponse<number> = {
          status: 200,
          message: "Pagamento realizado com sucesso",
          error: false,
          data: result.id,
        };

        res.status(200).json(response);
      })
      .catch((error: any) => {
        const response: HTTPResponse<undefined> = {
          status: 500,
          message:
            "Erro ao processar pagamento" +
            (error.message ? `: ${error.message}` : ""),
          error: true,
          data: undefined,
        };

        res.status(500).json(response);
      });
  });
});
