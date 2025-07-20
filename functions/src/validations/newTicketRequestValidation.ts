import * as yup from "yup";

import { Ticket, TicketStatus } from "../types/tickets";

export const newTicketRequestSchema: yup.Schema<
  Omit<Ticket, "id" | "create_at" | "used_at" | "qrCodeToken">
> = yup.object({
  name: yup.string().min(1, "Name is required").required("Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: yup.string().required("Phone is required"),
  birthdate: yup.number().required("Birthdate is required"),
  status: yup
    .mixed<TicketStatus>()
    .oneOf(Object.values(TicketStatus))
    .required("Status is required"),
  city: yup.string().required("City is required"),
  singleUse: yup.boolean().default(true),
  used: yup.boolean().default(false),
  state: yup.string().required("State is required"),
});
