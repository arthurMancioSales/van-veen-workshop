export enum TicketStatus {
  pending = "pending",
  approved = "approved",
  authorized = "authorized",
  in_process = "in_process",
  in_mediation = "in_mediation",
  rejected = "rejected",
  cancelled = "cancelled",
  refunded = "refunded",
  charged_back = "charged_back",
}

export type Ticket = {
  id: string;
  email: string;
  name: string;
  phone: string;
  birthdate: number;
  state: string;
  city: string;
  created_at: number;
  status: TicketStatus;
  qrCodeToken: string;
  used_at?: number | null;
  singleUse?: boolean;
  used?: boolean;
  payment_id: string;
};

export type NewTicket = Omit<Ticket, "id" | "created_at" | "qrCodeToken">;
