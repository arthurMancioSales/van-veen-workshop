import { routeBuilder } from "@/utils/routeBuilder";

export const leadsRoutes = {
  saveLead: routeBuilder(
    ["POST"],
    () => `https://savelead-566pzglqfa-uc.a.run.app`,
    // () => `http://127.0.0.1:5001/van-veen-workshop/us-central1/saveLead`,
  ),
  getLeads: routeBuilder(
    ["GET"],
    () => `https://getleads-566pzglqfa-uc.a.run.app`,
    // () => `http://127.0.0.1:5001/van-veen-workshop/us-central1/getLeads`,
  ),
};
