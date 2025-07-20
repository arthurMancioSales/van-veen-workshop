import { NewTicket, Ticket } from "../types/tickets";

export function newTicket({
  birthdate,
  email,
  name,
  phone,
  status,
  city,
  singleUse,
  used,
  state,
}: NewTicket): Omit<Ticket, "id"> {
  return {
    used_at: used ? new Date().getTime() : undefined,
    state: state,
    create_at: new Date().getTime(),
    birthdate: birthdate,
    email: email,
    name: name,
    phone: phone,
    status: status,
    qrCodeToken: "qrCodeToken", // Placeholder, should be generated or passed in
    city: city,
    singleUse: singleUse ?? true,
    used: used ?? false,
  };
}
