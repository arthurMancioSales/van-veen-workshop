import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import { HTTPResponse } from "../types";
import { Ticket } from "../types/tickets";

const cors = require("cors")(
  { 
    // origin: 
    //   [
    //     "https://workshop.vanveen.com.br", 
    //     "https://workshop.institutovanveen.com.br"
    //   ],
    origin: true, 
  });

export const getTickets = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    if (req.method !== "GET") {
      const response: HTTPResponse<undefined> = {
        status: 405,
        message: "Method not allowed",
        error: true,
      }
      return res.status(405).send(response);
    }

    const key = req.headers["x-admin-key"];

    if (key !== process.env.NEXT_PUBLIC_X_AUTH_ADMIN_KEY) {
      const response: HTTPResponse<undefined> = {
        status: 403,
        message: "Access denied",
        error: true,
      }
      return res.status(403).send(response);
    }

    const ticketSnapshot = await admin.firestore().collection("tickets").get();
    const tickets: Ticket[] = ticketSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data() as Omit<Ticket, 'id'>, 
    }));

    const response: HTTPResponse<Ticket[]> = {
      status: 200,
      message: "Tickets retrieved successfully",
      data: tickets,
      error: false,
    }

    res.status(200).send(response);
    return;
  });
});

module.exports = { getTickets };
