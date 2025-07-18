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
  birthday: string;
  create_at: number;
  status: TicketStatus;
  qrCodeToken: string;
  city: string;
  used_at?: number;
  singleUse?: boolean;
  used?: boolean;
}