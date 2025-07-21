import { routeBuilder } from "@/utils/routeBuilder";

export const ticketsRoutes = {
  tickets: routeBuilder(
    ["POST", "GET", "DELETE"],
    (params: { ticketId?: string; page?: number; size?: number }) => {
      const baseUrl =
        "http://127.0.0.1:5001/van-veen-workshop/us-central1/getTickets";

      const searchParams = new URLSearchParams();
      if (params?.page) searchParams.append("page", `${params.page}`);
      if (params?.size) searchParams.append("size", `${params.size}`);

      return searchParams.toString()
        ? `${baseUrl}?${searchParams.toString()}`
        : baseUrl;
    },
  ),
};
