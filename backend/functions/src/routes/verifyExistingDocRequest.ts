import corsLib from "cors";
import { collection } from "firebase/firestore";
import * as functions from "firebase-functions";

import { HTTPResponse } from "../types";
import { db } from "../utils/firebaseClient";
import { verifyExistingDoc } from "../utils/verifyExistingDoc";
import { verifyExistingDocSchema } from "../validations/verifyExistingDocValidation";
const cors = corsLib({
  // origin:
  //   [
  //     "https://workshop.vanveen.com.br",
  //     "https://workshop.institutovanveen.com.br"
  //   ],
  origin: true,
});

export const verifyExistingDocRequest = functions.https.onRequest(
  (req, res) => {
    cors(req, res, async () => {
      if (req.method !== "POST") {
        const response: HTTPResponse<undefined> = {
          status: 405,
          message: "Method not allowed",
          error: true,
        };
        return res.status(405).json(response);
      }

      const { type, phone, email } = req.body;

      try {
        verifyExistingDocSchema.validateSync(req.body);
      } catch (error) {
        const response: HTTPResponse<undefined> = {
          status: 400,
          message:
            error instanceof Error ? error.message : "Invalid request data",
          error: true,
        };

        return res.status(400).json(response);
      }

      const collectionRef = collection(db, type);

      const existingDoc = await verifyExistingDoc(
        collectionRef,
        phone ? phone.trim() : null,
        email ? email.trim() : null,
      );

      if (existingDoc.error) {
        return res.status(existingDoc.status).send(existingDoc);
      }

      const response: HTTPResponse<undefined> = {
        status: 200,
        message: "No existing document found",
        error: false,
      };

      res.status(200).send(response);
      return;
    });
  },
);

module.exports = { verifyExistingDocRequest };
