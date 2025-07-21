import { useCallback, useEffect, useState } from "react";

import request, { requestOptions } from "@/utils/request";

export default function useFetch<T>(
  {
    url,
  }: {
    url: string;
  },
  mockData?: T,
) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | string[] | null>(null);
  const [loading, setLoading] = useState(true);

  const getData = useCallback(async () => {
    if (mockData) {
      setData(mockData);
      setLoading(false);
      return;
    }

    const requestParams: requestOptions = {
      url: url,
      method: "GET",
    };

    try {
      setLoading(true);
      const response = await request<T>(requestParams);

      if (response.error) {
        setData(null);
        setError(response.message);
      }

      setLoading(false);
      setData(response.data);
    } catch {
      setError("Erro");
      setLoading(false);
    }
  }, [mockData, url]);

  useEffect(() => {
    getData();

    return () => {
      setData(null);
      setError(null);
      setLoading(true);
    };
  }, [getData]);

  return { data, error, loading, refreshData: getData };
}
