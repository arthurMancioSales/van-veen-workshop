import { HttpMethod, MethodsMap, Route } from "@/types/routes";

export function routeBuilder<
  const M extends HttpMethod[],
  const Params extends Record<string, any>,
>(
  methodList: M,
  urlBuilder: (params: Params) => string,
): Route<M[number], Params> {
  const methodsMap = Object.fromEntries(
    methodList.map((m) => [m, m]),
  ) as MethodsMap<M[number]>;

  return {
    methods: methodsMap,
    urlBuilder,
  };
}
