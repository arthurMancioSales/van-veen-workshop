import * as yup from "yup";
import { Lead } from "../types/leads";

export const newLeadRequestSchema: yup.Schema<Omit<Lead, 'id' | 'create_at'>> = yup.object({
  name: yup.string().min(1, "Name is required").required("Name is required"),
  email: yup.string().email("Invalid email format").required("Email is required"),
  phone: yup.string().required("Phone is required"),
  birthday: yup.number().required("Birthday is required"),
});