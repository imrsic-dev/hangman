import { useState, useEffect, useCallback } from "react";

const useQuote = (isGameRestarted, setIsGameRestarted) => {
  console.log("useQuote");
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchQuote = useCallback(async () => {
    setLoading(true);
    try {
      let response = await fetch("https://type.fit/api/quotes");
      response = await response.json();
      if (!response.length) {
        setQuote("");
      } else {
        setQuote(response[0]);
      }
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
      setIsGameRestarted(false);
    }
  }, []);

  useEffect(() => {
    console.log("UE");
    fetchQuote();
  }, [fetchQuote]);

  useEffect(() => {
    if (isGameRestarted) {
      console.log("UE restart");
      fetchQuote();
    }
  }, [isGameRestarted, fetchQuote]);

  return [quote, loading, error];
};

export default useQuote;
