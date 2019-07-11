import React from 'react';
import { useTimer, useCountdownTimer }  from 'time-hooks';

const App = () => {
  const [timer, startTimer, stopTimer, clearTimer ] = useTimer(100);
  const [countdown, startCountdown, stopCountdown, clearCountdown, addToCountdown] = useCountdownTimer(15 * 60 * 1000, 100);

  return (
    <div>
      <div>
        <h1>Timer</h1>
        <button onClick={() => startTimer()}>
          Start
        </button>
        <button  onClick={() => stopTimer()}>
          Stop
        </button>
        <button onClick={() => clearTimer()}>
          Clear
        </button>
        {timer / 1000} s
      </div>
      <div>
        <h1>Countdown</h1>
        <button onClick={() => startCountdown()}>
          Start
        </button>
        <button  onClick={() => stopCountdown()}>
          Stop
        </button>
        <button onClick={() => clearCountdown()}>
          Clear
        </button>
        <button onClick={() => addToCountdown(2000)}>
          Add
        </button>
        {countdown / 1000} s
      </div>
    </div>


  )
};

export default App;
