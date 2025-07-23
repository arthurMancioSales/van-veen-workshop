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
    () => "https://verifyexistingdocrequest-566pzglqfa-uc.a.run.app",
  ),
};
