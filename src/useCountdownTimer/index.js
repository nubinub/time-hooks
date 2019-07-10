import {useState, useCallback} from 'react';
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

  return [timer, startTimer, stop, clear];
};

export default useCountdownTimer;
