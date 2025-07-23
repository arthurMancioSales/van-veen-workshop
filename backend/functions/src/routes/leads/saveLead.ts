import corsLib from "cors";
import { addDoc, collection } from "firebase/firestore";
import * as functions from "firebase-functions";

import { HTTPResponse } from "../../types";
import { Lead } from "../../types/leads";
import { db } from "../../utils/firebaseClient";
import { verifyExistingDoc } from "../../utils/verifyExistingDoc";
import { newLeadRequestSchema } from "../../validations/leads/newLeadRequestValidation";

const cors = corsLib({
  // origin:
  //   [
  //     "https://workshop.vanveen.com.br",
  //     "https://workshop.institutovanveen.com.br"
  //   ],
  origin: true,
});

export const saveLead = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    if (req.method !== "POST") {
      const response: HTTPResponse<undefined> = {
        status: 405,
        message: "Method not allowed",
        error: true,
      };
      return res.status(405).send(response);
    }

    const { name, email, phone, birthdate, city, state } = req.body;

    try {
      newLeadRequestSchema.validateSync(req.body);
    } catch (error) {
      const response: HTTPResponse<undefined> = {
        status: 400,
        message:
          error instanceof Error ? error.message : "Invalid request data",
        error: true,
      };

      return res.status(400).send(response);
    }

    const leadsRef = collection(db, "leads");

    const existingLead = await verifyExistingDoc(
      leadsRef,
      phone ? phone.trim() : null,
      email ? email.trim() : null,
    );

    if (existingLead.error) {
      return res.status(existingLead.status).send(existingLead);
    }

    const newLead: Omit<Lead, "id"> = {
      name: name.trim(),
      email: email.trim(),
      phone: phone ? phone.trim() : null,
      created_at: new Date().getTime(),
      birthdate,
      city,
      state,
    };

    try {
      await addDoc(leadsRef, newLead);
    } catch (error) {
      const response: HTTPResponse<undefined> = {
        status: 500,
        message:
          "Error saving lead" +
          (error instanceof Error ? `: ${error.message}` : ""),
        error: true,
      };
      return res.status(500).send(response);
    }

    const response: HTTPResponse<undefined> = {
      status: 200,
      message: "Lead saved successfully",
      error: false,
    };

    res.status(200).send(response);
    return;
  });
});

module.exports = { saveLead };
