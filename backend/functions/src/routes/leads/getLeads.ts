import { collection, getDocs } from "@firebase/firestore";
import corsLib from "cors";
import * as functions from "firebase-functions";

import { HTTPResponse } from "../../types";
import { Lead } from "../../types/leads";
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

export const getLeads = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    const role = authenticateRequest(req, res);

    if (!role) return;

    if (req.method !== "GET") {
      const response: HTTPResponse<undefined> = {
        status: 405,
        message: "Method not allowed",
        error: true,
      };
      res.status(405).send(response);
      return;
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
