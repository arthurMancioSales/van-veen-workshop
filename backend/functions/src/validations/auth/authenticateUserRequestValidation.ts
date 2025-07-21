import * as yup from "yup";

import { AuthenticateUserProps } from "../../types/auth";

export const authenticateUserRequestSchema: yup.ObjectSchema<AuthenticateUserProps> =
  yup.object().shape({
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });
