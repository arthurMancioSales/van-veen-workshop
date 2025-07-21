export enum TicketStatus {
  waiting_payment = "waiting_payment",
  paid = "paid",
  cancelled = "cancelled",
  refunded = "refunded",
  expired = "expired",
  processing = "processing",
  completed = "completed",
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
  used_at?: number;
  singleUse?: boolean;
  used?: boolean;
};

export type NewTicket = Omit<Ticket, "id" | "created_at" | "qrCodeToken">;
