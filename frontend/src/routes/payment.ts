import { routeBuilder } from "@/utils/routeBuilder";

export const paymentRoutes = {
  payment: routeBuilder(
    ["POST"],
    () => "http://127.0.0.1:5001/van-veen-workshop/us-central1/process_payment",
  ),
};
