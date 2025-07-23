import { routes } from "@/routes/index";
import request, { requestOptions } from "@/utils/request";

import { NewTicket } from "../types/tickets";

export async function newTicketApi(body: NewTicket) {
  try {
    const requestParams: requestOptions = {
      url: `${routes.payment.urlBuilder()}`,
      method: routes.payment.methods.POST,
      body,
    };

    const response = await request<{ message: string }>(requestParams);
    if (response.error) {
      return { data: null as null, error: response.message };
    }

    return { data: response.data, error: null as null };
  } catch {
    return {
      data: null as null,
      error: "Ocorreu um erro inesperado. Tente novamente mais tarde.",
    };
  }
}
