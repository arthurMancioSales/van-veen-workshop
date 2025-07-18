import { Ticket } from "../types/tickets";

export function newTicket({
  birthday,
  email,
  name,
  phone,
  status,
  qrCodeToken,
  city,
  create_at,
  singleUse,
  used,
}:Omit<Ticket, 'id' | "used_at">): Omit<Ticket, 'id' | "used_at"> {
  return {
    create_at: new Date().getTime(),
    birthday: birthday,
    email: email,
    name: name,
    phone: phone,
    status: status,
    qrCodeToken: qrCodeToken,
    city: city,
    singleUse: singleUse ?? true,
    used: used ?? false,
  };
}