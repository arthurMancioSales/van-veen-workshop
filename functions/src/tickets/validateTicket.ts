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

export const validateTicket = functions.https.onRequest((req, res) => {
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

    const { token } = req.query;
    if (!token) {
      const response: HTTPResponse<undefined> = {
        status: 400,
        message: "Token is required",
        error: true,
      }
      return res.status(400).send(response);
    } 

    const snapshot = await admin
      .firestore()
      .collection("tickets")
      .where("token", "==", token)
      .limit(1)
      .get();

    if (snapshot.empty) return res.status(404).send("Ticket not found");

    const ticket: Ticket = {
      id: snapshot.docs[0].id,
      ...snapshot.docs[0].data() as Omit<Ticket, 'id'>,
    }

    const response: HTTPResponse<Ticket> = {
      status: 200,
      message: "Ticket retrieved successfully",
      data: ticket,
      error: false,
    }

    res.status(200).send(response);
    return;
  });
});

module.exports = { validateTicket };
