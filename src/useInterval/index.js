import {useState, useEffect, useCallback} from 'react';

const useInterval = () => {
  const [intervalId, setIntervalId] = useState();

  useEffect(() => {
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    }
  }, [intervalId]);

  const stop = useCallback(() => {
    clearInterval(intervalId);
    setIntervalId();
  }, [intervalId]);

  const start = useCallback((fn, step) => {
    if (!intervalId) {
      setIntervalId(setInterval(fn, step));
    }
  }, [intervalId]);

  return [start, stop];
};

export default useInterval;
