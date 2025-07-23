import * as Yup from "yup";

import { NewTicket, TicketStatus } from "../types/tickets";

export const newTicketValidation: Yup.ObjectSchema<NewTicket> =
  Yup.object().shape({
    name: Yup.string().min(2).max(100).required("Nome é obrigatório"),
    email: Yup.string().email().required("Email é obrigatório"),
    phone: Yup.string().min(10).max(15).required("Telefone é obrigatório"),
    birthdate: Yup.number().required("Data de nascimento é obrigatória"),
    city: Yup.string().min(2).max(100).required("Cidade é obrigatória"),
    state: Yup.string().min(2).max(100).required("Estado é obrigatório"),
    status: Yup.mixed<TicketStatus>()
      .oneOf(Object.values(TicketStatus))
      .required("Status é obrigatório"),
    singleUse: Yup.boolean().required("Uso único é obrigatório"),
    used: Yup.boolean().required("Usado é obrigatório"),
    used_at: Yup.number().optional(),
    payment_id: Yup.string().required("ID do pagamento é obrigatório"),
  });
