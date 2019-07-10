import {useState, useEffect, useCallback} from 'react';
import useInterval from '../useInterval';

const useTimer = (interval = 1000) => {
    const [timer, setTimer] = useState(0);
    const [startInterval, stop] = useInterval();

    const clear = useCallback(() => {
        stop();
        setTimer(0);
    }, [stop]);

    const startTimer = useCallback(() => {
      startInterval(() => {
          setTimer((timer) => timer + interval);
      }, interval);
    }, [startInterval]);

    return [timer, startTimer, stop, clear];
};

export default useTimer;
