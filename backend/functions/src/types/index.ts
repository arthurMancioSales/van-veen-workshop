export type HTTPResponse<T> = {
  status: number;
  message: string;
  data?: T;
  error: boolean;
};

export type verifyExistingDocRequest = {
  type: "leads" | "tickets";
  phone: string | null;
  email: string | null;
};
