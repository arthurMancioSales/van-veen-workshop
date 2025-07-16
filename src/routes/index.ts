import { leadsRoutes } from "./leads";
import { ticketsRoutes } from "./tickets";

export const routes = {
  ...ticketsRoutes,
  ...leadsRoutes,
};
