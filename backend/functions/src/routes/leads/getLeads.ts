import { collection, getDocs } from "@firebase/firestore";
import corsLib from "cors";
import * as functions from "firebase-functions";
import * as jwt from "jsonwebtoken";

import { HTTPResponse } from "../../types";
import { Lead } from "../../types/leads";
import { db } from "../../utils/firebaseClient";

const cors = corsLib({
  // origin:
  //   [
  //     "https://workshop.vanveen.com.br",
  //     "https://workshop.institutovanveen.com.br"
  //   ],
  origin: true,
});

const SECRET = process.env.PASSWORD_SECRET || "default_secret";

export const getLeads = functions.https.onRequest((req, res) => {
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

    const leadsRef = collection(db, "leads");

    try {
      const leadsSnapshot = await getDocs(leadsRef);
      const leads: Lead[] = leadsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Lead, "id">),
      }));

      const response: HTTPResponse<Lead[]> = {
        status: 200,
        message: "Leads retrieved successfully",
        data: leads,
        error: false,
      };
      res.status(200).send(response);
    } catch (error) {
      const response: HTTPResponse<undefined> = {
        status: 500,
        message:
          "Error retrieving leads" +
          (error instanceof Error ? `: ${error.message}` : ""),
        error: true,
      };
      return res.status(500).send(response);
    }

    return;
  });
});

module.exports = { getLeads };
