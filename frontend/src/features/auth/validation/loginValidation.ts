import * as Yup from "yup";

export const loginValidationSchema = Yup.object().shape({
  password: Yup.string()
    .required("Senha é obrigatória")
    .min(6, "Senha deve ter pelo menos 6 caracteres")
    .max(50, "Senha deve ter no máximo 50 caracteres"),
});
