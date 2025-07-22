import { routes } from "@/routes/index";
import request, { requestOptions } from "@/utils/request";

import { Login } from "../types/login";

export async function loginApi({ password }: Login) {
  const body = {
    password,
  };

  try {
    const requestParams: requestOptions = {
      url: `${routes.login.urlBuilder()}`,
      method: "POST",
      body,
      credentials: "omit",
    };

    const response = await request<{ token: string }>(requestParams);
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
