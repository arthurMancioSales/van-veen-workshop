import { routeBuilder } from "@/utils/routeBuilder";

export const ticketsRoutes = {
  tickets: routeBuilder(
    ["POST", "GET", "DELETE"],
    (params: { ticketId?: string; page?: number; size?: number }) => {
      const baseUrl = `${process.env.NEXT_PUBLIC_apiAddress}/tickets/${params.ticketId ?? ""}`;

      const searchParams = new URLSearchParams();
      if (params.page) searchParams.append("page", `${params.page}`);
      if (params.size) searchParams.append("size", `${params.size}`);

      return searchParams.toString()
        ? `${baseUrl}?${searchParams.toString()}`
        : baseUrl;
    },
  ),
};
