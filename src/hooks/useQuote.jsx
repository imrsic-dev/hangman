import { useState, useEffect, useCallback } from 'react';

const useQuote = (restartGame, isGameStarted) => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchQuote = useCallback(async () => {
    setLoading(true);
    try {
      let response = await fetch('https://type.fit/api/quotes');
      response = await response.json();
      if (!response.length) {
        console.log('los response');
        setQuote('');
      } else {
        let randomIndex = Math.floor(Math.random() * response.length);
        setQuote(response[randomIndex]);
      }
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if(isGameStarted){
      return;
    }
    console.log('1st fetch');
    fetchQuote();
  }, [isGameStarted, fetchQuote]);

  useEffect(() => {
    if(!isGameStarted){
      console.log('canceled fetch');
      return;
    }
    console.log('restart fetch');
    fetchQuote();
  }, [fetchQuote, restartGame]);

  return [quote, loading, error];
};

export default useQuote;
