/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import { setGlobalOptions } from "firebase-functions";

import { getLeads } from "./routes/leads/getLeads";
import { saveLead } from "./routes/leads/saveLead";
import { login } from "./routes/login/login";
import { process_payment } from "./routes/payment/processPayment";
import { paymentWebhook } from "./routes/payment/webhook";
import { createTicket } from "./routes/tickets/createTicket";
import { getTickets } from "./routes/tickets/getTickets";
import { verifyExistingDocRequest } from "./routes/verifyExistingDocRequest";

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// For cost control, you can set the maximum number of containers that can be
// running at the same time. This helps mitigate the impact of unexpected
// traffic spikes by instead downgrading performance. This limit is a
// per-function limit. You can override the limit for each function using the
// `maxInstances` option in the function's options, e.g.
// `onRequest({ maxInstances: 5 }, (req, res) => { ... })`.
// NOTE: setGlobalOptions does not apply to functions using the v1 API. V1
// functions should each use functions.runWith({ maxInstances: 10 }) instead.
// In the v1 API, each function can only serve one request per container, so
// this will be the maximum concurrent request count.
setGlobalOptions({ maxInstances: 10 });

// export const helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.saveLead = saveLead;
exports.getLeads = getLeads;
exports.getTickets = getTickets;
exports.createTicket = createTicket;
exports.paymentWebhook = paymentWebhook;
exports.login = login;
exports.process_payment = process_payment;
exports.verifyExistingDocRequest = verifyExistingDocRequest;
