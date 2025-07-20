export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

export type MethodsMap<M extends HttpMethod> = {
  [K in M]: K;
};

export interface Route<
  M extends HttpMethod = HttpMethod,
  Params extends Record<string, any> = object,
> {
  methods: MethodsMap<M>;
  urlBuilder?: (params?: Params) => string;
}

export enum sortDirection {
  asc = "asc",
  desc = "desc",
}

export enum filterRules {
  equals = "eq",
  notEquals = "neq",
  like = "like",
  notLike = "nlike",
  contains = "in",
  notContains = "nin",
  isNull = "isNull",
  isNotNull = "isNotNull",
  // startsWith = "startsWith", TODO: not implemented yet
  // endsWith = "endsWith", TODO: not implemented yet
}
