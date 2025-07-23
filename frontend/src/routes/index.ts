import { routeBuilder } from "@/utils/routeBuilder";

import { authRoutes } from "./auth";
import { leadsRoutes } from "./leads";
import { paymentRoutes } from "./payment";
import { ticketsRoutes } from "./tickets";

export const routes = {
  ...ticketsRoutes,
  ...leadsRoutes,
  ...authRoutes,
  ...paymentRoutes,
  verifyExistingDocRequest: routeBuilder(
    ["POST"],
    () =>
      "http://127.0.0.1:5001/van-veen-workshop/us-central1/verifyExistingDocRequest",
  ),
};
