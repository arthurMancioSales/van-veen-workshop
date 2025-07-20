import corsLib from "cors";
import {
  addDoc,
  collection,
  getDocs,
  or,
  query,
  where,
} from "firebase/firestore";
import * as functions from "firebase-functions";

import { db } from "../lib/firebaseClient";
import { HTTPResponse } from "../types";
import { Lead } from "../types/leads";
import { newLeadRequestSchema } from "../validations/newLeadRequestValidation";

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

    try {
      const q = query(
        leadsRef,
        or(
          where("phone", "==", phone.trim()),
          where("email", "==", email.trim()),
        ),
      );

      const snapshot = await getDocs(q);

      if (!snapshot.empty) {
        const existingLead = snapshot.docs[0].data() as Lead;
        const response: HTTPResponse<Lead> = {
          status: 409,
          message: "Lead already exists",
          data: existingLead,
          error: true,
        };
        return res.status(409).send(response);
      }
    } catch (error) {
      const response: HTTPResponse<undefined> = {
        status: 500,
        message:
          "Error checking for existing lead" +
          (error instanceof Error ? `: ${error.message}` : ""),
        error: true,
      };
      return res.status(500).send(response);
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
