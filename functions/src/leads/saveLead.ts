import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import { Lead } from "../types/leads";
import { HTTPResponse } from "../types";

const cors = require("cors")(
  { 
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
      }
      return res.status(405).send(response);
    }

    const { name, email, phone, birthday } = req.body;

    if (!name || !email) {
      const response: HTTPResponse<undefined> = {
        status: 400,
        message: "Name and email are required fields",
        error: true,
      }
      return res.status(400).send(response);
    }

    const newLead: Omit<Lead, 'id'> = {
      name: name.trim(),
      email: email.trim(),
      phone: phone ? phone.trim() : null,
      create_at: new Date().getTime(),
      birthday
    }

    await admin.firestore().collection("leads").add(newLead);

    const response: HTTPResponse<undefined> = {
      status: 200,
      message: "Lead saved successfully",
      error: false,
    }

    res.status(200).send(response);
    return;
  });
});

module.exports = { saveLead };
