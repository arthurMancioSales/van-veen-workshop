export type Lead = {
  id: string;
  name: string;
  email: string;
  phone: string;
  birthdate: number;
  created_at: number;
  city: string;
  state: string;
};

export type NewLead = Omit<Lead, "id" | "created_at">;
