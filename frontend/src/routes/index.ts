import { authRoutes } from "./auth";
import { leadsRoutes } from "./leads";
import { paymentRoutes } from "./payment";
import { ticketsRoutes } from "./tickets";

export const routes = {
  ...ticketsRoutes,
  ...leadsRoutes,
  ...authRoutes,
  ...paymentRoutes,
};
