import { routeBuilder } from "@/utils/routeBuilder";

export const authRoutes = {
  login: routeBuilder(["POST"], () => {
    const baseUrl = `http://127.0.0.1:5001/van-veen-workshop/us-central1/login`;

    return baseUrl;
  }),
};
