import { authRoutes } from "./auth";
import { leadsRoutes } from "./leads";
import { ticketsRoutes } from "./tickets";

export const routes = {
  ...ticketsRoutes,
  ...leadsRoutes,
  ...authRoutes,
};
