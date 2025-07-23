import * as yup from "yup";

import { verifyExistingDocRequest } from "../types";

export const verifyExistingDocSchema: yup.ObjectSchema<verifyExistingDocRequest> =
  yup.object().shape({
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    phone: yup.string().required("Phone is required"),
    type: yup
      .mixed<"leads" | "tickets">()
      .oneOf(["leads", "tickets"], "Type must be either 'lead' or 'ticket'")
      .required("Type is required"),
  });
