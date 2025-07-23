import { routeBuilder } from "@/utils/routeBuilder";

export const paymentRoutes = {
  payment: routeBuilder(
    ["POST"],
    () =>
      "https://us-central1-van-veen-workshop.cloudfunctions.net/process_payment",
  ),
};
