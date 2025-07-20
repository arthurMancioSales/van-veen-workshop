import * as Yup from "yup";

import { NewLead } from "../types/leads";

export const newLeadValidation: Yup.ObjectSchema<NewLead> = Yup.object().shape({
  name: Yup.string().min(2).max(100).required("Nome é obrigatório"),
  email: Yup.string().email().required("Email é obrigatório"),
  phone: Yup.string().min(10).max(15).required("Telefone é obrigatório"),
  birthdate: Yup.number().required("Data de nascimento é obrigatória"),
  city: Yup.string().min(2).max(100).required("Cidade é obrigatória"),
  state: Yup.string().min(2).max(100).required("Estado é obrigatório"),
});
