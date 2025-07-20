import { addDoc, collection } from "@firebase/firestore";
import corsLib from "cors";
import * as functions from "firebase-functions";

import { newTicket } from "../factories/ticket";
import { db } from "../lib/firebaseClient";
import { HTTPResponse } from "../types";
import { Ticket } from "../types/tickets";
import { newTicketRequestSchema } from "../validations/newTicketRequestValidation";

const cors = corsLib({
  // origin:
  //   [
  //     "https://workshop.vanveen.com.br",
  //     "https://workshop.institutovanveen.com.br"
  //   ],
  origin: true,
});

export const createTicket = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    if (req.method !== "POST") {
      const response: HTTPResponse<undefined> = {
        status: 405,
        message: "Method not allowed",
        error: true,
      };
      return res.status(405).send(response);
    }

    const key = req.headers["x-admin-key"];

    if (key !== process.env.NEXT_PUBLIC_X_AUTH_ADMIN_KEY) {
      const response: HTTPResponse<undefined> = {
        status: 403,
        message: "Access denied",
        error: true,
      };
      return res.status(403).send(response);
    }

    const ticketData: Omit<
      Ticket,
      "id" | "created_at" | "used_at" | "qrCodeToken"
    > = req.body;

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

    const ticketsRef = collection(db, "tickets");

    const ticket: Omit<Ticket, "id"> = newTicket({
      birthdate: ticketData.birthdate,
      email: ticketData.email,
      name: ticketData.name,
      phone: ticketData.phone,
      status: ticketData.status,
      state: ticketData.state,
      city: ticketData.city,
      singleUse: ticketData.singleUse,
      used: ticketData.used,
    });

    try {
      await addDoc(ticketsRef, ticket);
    } catch (error) {
      const response: HTTPResponse<undefined> = {
        status: 500,
        message:
          "Error creating ticket" +
          (error instanceof Error ? `: ${error.message}` : ""),
        error: true,
      };
      return res.status(500).send(response);
    }

    const response: HTTPResponse<undefined> = {
      status: 200,
      message: "Ticket created successfully",
      error: false,
    };

    res.status(200).send(response);
    return;
  });
});

module.exports = { createTicket };
