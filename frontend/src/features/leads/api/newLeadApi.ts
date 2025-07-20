import { routes } from "@/routes/index";
import request, { requestOptions } from "@/utils/request";

import { NewLead } from "../types/leads";

export async function newLeadApi({
  name,
  email,
  birthdate,
  city,
  state,
  phone,
}: NewLead) {
  const body = {
    name,
    email,
    birthdate,
    city,
    state,
    phone,
  };

  try {
    const requestParams: requestOptions = {
      url: `${routes.leads.urlBuilder()}`,
      method: routes.leads.methods.POST,
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
