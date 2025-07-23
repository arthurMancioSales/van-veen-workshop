import { routeBuilder } from "@/utils/routeBuilder";

export const paymentRoutes = {
  payment: routeBuilder(
    ["POST"],
    () => "https://process-payment-566pzglqfa-uc.a.run.app",
  ),
};
