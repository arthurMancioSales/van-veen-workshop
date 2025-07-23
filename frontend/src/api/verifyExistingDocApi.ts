import { routes } from "@/routes/index";
import { verifyExistingDocApiProps } from "@/types";
import request, { requestOptions } from "@/utils/request";

export async function verifyExistingDocApi({
  phone,
  email,
  type,
}: verifyExistingDocApiProps) {
  const body = {
    phone: phone,
    email: email,
    type: type,
  };

  try {
    const requestParams: requestOptions = {
      url: `${routes.verifyExistingDocRequest.urlBuilder()}`,
      method: `${routes.verifyExistingDocRequest.methods.POST}`,
      body,
    };

    const response = await request<undefined>(requestParams);
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
