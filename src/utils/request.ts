import Cookies from "js-cookie";

import { HttpMethod } from "@/types/routes";

export interface requestOptions {
  url: string;
  method: HttpMethod;
  body?: object | FormData;
  formData?: boolean;
  mock?: any;
}

export default async function request<T>({
  url,
  method,
  body,
  formData,
  mock,
}: requestOptions): Promise<{
  data: T;
  error: boolean;
  status: number;
  message?: string | string[];
  mock?: T;
}> {
  const accessToken = Cookies.get("accessToken");

  if (mock) {
    return {
      data: mock,
      error: false,
      status: 200,
    };
  }

  const requestOptions: RequestInit = {
    method,
    body: !formData ? JSON.stringify(body) : (body as FormData),
    headers: !formData
      ? {
          "Content-type": "application/json",
          Authorization: accessToken ? `Bearer ${accessToken}` : "",
        }
      : { Authorization: `Bearer ${accessToken}` },
    cache: "no-store",
  };

  const response = await fetch(url, requestOptions);
  if (response.status === 204) {
    return {
      data: null,
      error: false,
      status: 204,
      message: null,
    };
  }
  const data = await response.json();

  return {
    data,
    error: !response.ok,
    status: response.status,
    message: data.message ? data.message : null,
  };
}
