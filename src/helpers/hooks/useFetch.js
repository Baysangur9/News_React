import {useEffect, useState} from "react";

export const useFetch = (fetchFunction, params) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const stingParams = params ? new URLSearchParams(params).toString() : "";

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const result = await fetchFunction(params);

        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [fetchFunction, stingParams]);
  return {data, isLoading, error};
};
