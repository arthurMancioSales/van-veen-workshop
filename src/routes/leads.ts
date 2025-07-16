import { routeBuilder } from "@/utils/routeBuilder";

export const leadsRoutes = {
  leads: routeBuilder(
    ["POST", "GET"],
    (params: { page?: number; size?: number }) => {
      const baseUrl = `${process.env.NEXT_PUBLIC_apiAddress}/leads`;

      const searchParams = new URLSearchParams();
      if (params.page) searchParams.append("page", `${params.page}`);
      if (params.size) searchParams.append("size", `${params.size}`);

      return searchParams.toString()
        ? `${baseUrl}?${searchParams.toString()}`
        : baseUrl;
    },
  ),
};
