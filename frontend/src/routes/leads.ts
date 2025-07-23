import { routeBuilder } from "@/utils/routeBuilder";

export const leadsRoutes = {
  saveLead: routeBuilder(
    ["POST"],
    () => `https://savelead-566pzglqfa-uc.a.run.app`,
  ),
  getLeads: routeBuilder(
    ["GET"],
    () => `https://getleads-566pzglqfa-uc.a.run.app`,
  ),
};
