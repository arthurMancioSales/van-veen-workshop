import { collection, getDocs } from "@firebase/firestore";
import corsLib from "cors";
import * as functions from "firebase-functions";

import { db } from "../lib/firebaseClient";
import { HTTPResponse } from "../types";
import { Lead } from "../types/leads";

const cors = corsLib({
  // origin:
  //   [
  //     "https://workshop.vanveen.com.br",
  //     "https://workshop.institutovanveen.com.br"
  //   ],
  origin: true,
});

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

    const key = req.headers["x-admin-key"];

    if (key !== process.env.NEXT_PUBLIC_X_AUTH_ADMIN_KEY) {
      const response: HTTPResponse<undefined> = {
        status: 403,
        message: "Access denied",
        error: true,
      };
      return res.status(403).send(response);
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
