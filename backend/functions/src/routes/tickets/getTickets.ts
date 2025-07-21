import { collection, getDocs } from "@firebase/firestore";
import corsLib from "cors";
import * as functions from "firebase-functions";
import * as jwt from "jsonwebtoken";

import { HTTPResponse } from "../../types";
import { Ticket } from "../../types/tickets";
import { db } from "../../utils/firebaseClient";

const SECRET = process.env.PASSWORD_SECRET || "default_secret";

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
    if (req.method !== "GET") {
      const response: HTTPResponse<undefined> = {
        status: 405,
        message: "Method not allowed",
        error: true,
      };
      return res.status(405).send(response);
    }

    const cookie = req.headers.cookie || "";
    const token = cookie
      .split("; ")
      .find((c) => c.startsWith("adminToken="))
      ?.split("=")[1];

    if (!token) return res.status(401).json({ error: "Não autorizado" });

    try {
      const decoded = jwt.verify(token, SECRET);

      if (typeof decoded !== "object" || !("role" in decoded)) {
        throw new Error("Token inválido");
      }

      if (!decoded.role || decoded.role !== "admin")
        throw new Error("Acesso negado");
    } catch {
      const response: HTTPResponse<undefined> = {
        status: 401,
        message: "Token inválido ou expirado",
        error: true,
      };
      return res.status(401).json(response);
    }

    const ticketsRef = collection(db, "tickets");

    try {
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

module.exports = { getTickets };
