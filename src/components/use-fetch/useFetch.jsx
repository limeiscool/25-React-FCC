import { useEffect, useState } from "react";

export default function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setPending(true);
    try {
      const res = await fetch(url, { ...options });
      if (!res.ok) throw new Error(res.statusText);

      const result = await res.json();
      setData(result);
      setError(null);
      setPending(false);
    } catch (error) {
      setError(`${error} an Error Occured`);
      setPending(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, error, pending };
}
