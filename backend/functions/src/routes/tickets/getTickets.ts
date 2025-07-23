import { collection, getDocs, query, where } from "@firebase/firestore";
import corsLib from "cors";
import * as functions from "firebase-functions";

import { HTTPResponse } from "../../types";
import { Ticket } from "../../types/tickets";
import { db } from "../../utils/firebaseClient";
import { authenticateRequest } from "../login/authenticateRequest";

const cors = corsLib({
  // origin:
  //   [
  //     "https://workshop.vanveen.com.br",
  //     "https://workshop.institutovanveen.com.br"
  //   ],
  origin: true,
});

export const getTickets = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    const role = authenticateRequest(req, res);

    if (!role) return;

    if (req.method !== "GET") {
      const response: HTTPResponse<undefined> = {
        status: 405,
        message: "Method not allowed",
        error: true,
      };
      return res.status(405).send(response);
    }

    try {
      if (req.params.ticketToken) {
        getTicketByToken(req, res);
        return;
      }

      getAllTickets(req, res);
      return;
    } catch (error) {
      const response: HTTPResponse<undefined> = {
        status: 500,
        message:
          "Internal server error" +
          (error instanceof Error ? `: ${error.message}` : ""),
        error: true,
      };
      res.status(500).send(response);
    }

    return;
  });
});

async function getTicketByToken(req: functions.https.Request, res: any) {
  const ticketsRef = collection(db, "tickets");

  const ticketSnapshot = await getDocs(
    query(ticketsRef, where("qrCodeToken", "==", req.params.ticketToken)),
  );

  if (ticketSnapshot.empty) {
    const response: HTTPResponse<undefined> = {
      status: 404,
      message: "Ticket not found",
      error: true,
    };
    return res.status(404).send(response);
  }

  const ticketData = ticketSnapshot.docs[0].data() as Omit<Ticket, "id">;
  const ticket: Ticket = {
    id: ticketSnapshot.docs[0].id,
    ...ticketData,
  };

  const response: HTTPResponse<Ticket> = {
    status: 200,
    message: "Ticket retrieved successfully",
    data: ticket,
    error: false,
  };

  return res.status(200).send(response);
}

async function getAllTickets(req: functions.https.Request, res: any) {
  const ticketsRef = collection(db, "tickets");
  const ticketSnapshot = await getDocs(ticketsRef);

  const tickets: Ticket[] = ticketSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<Ticket, "id">),
  }));

  const response: HTTPResponse<Ticket[]> = {
    status: 200,
    message: "Tickets retrieved successfully",
    data: tickets,
    error: false,
  };

  res.status(200).send(response);
}

module.exports = { getTickets };
