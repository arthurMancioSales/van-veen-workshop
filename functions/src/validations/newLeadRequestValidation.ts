import * as yup from "yup";

import { NewLead } from "../types/leads";

export const newLeadRequestSchema: yup.Schema<NewLead> = yup.object({
  name: yup.string().min(1, "Name is required").required("Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: yup.string().required("Phone is required"),
  birthdate: yup.number().required("Birthdate is required"),
  city: yup.string().min(1, "City is required").required("City is required"),
  state: yup.string().min(1, "State is required").required("State is required"),
});
