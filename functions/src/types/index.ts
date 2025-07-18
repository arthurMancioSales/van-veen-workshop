export type HTTPResponse<T> = {
  status: number;
  message: string;
  data?: T;
  error: boolean;
}