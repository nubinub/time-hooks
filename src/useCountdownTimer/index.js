import {useState, useCallback, useEffect} from 'react';
import useInterval from '../useInterval';

const useCountdownTimer = (total, step = 1000) => {
  const [timer, setTimer] = useState(total);
  const [startInterval, stop] = useInterval();

  const startTimer = useCallback(() => {
    startInterval(() => {
      setTimer((t) => t - step);
    }, step)
  }, [startInterval]);

  const clear = useCallback(() => {
    stop();
    setTimer(total);
  }, [stop]);

  const add = useCallback((inc) => {
    setTimer((t) => t + inc);
  }, []);

  useEffect(() => {
    clear();
  }, [total, step]);

  return [timer, startTimer, stop, clear, add];
};

export default useCountdownTimer;
