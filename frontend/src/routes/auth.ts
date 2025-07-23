import { routeBuilder } from "@/utils/routeBuilder";

export const authRoutes = {
  login: routeBuilder(["POST"], () => {
    const baseUrl = `https://login-566pzglqfa-uc.a.run.app`;

    return baseUrl;
  }),
};
