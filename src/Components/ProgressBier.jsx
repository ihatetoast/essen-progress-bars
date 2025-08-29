import { useState, useEffect, useRef } from 'react';

export default function ProgressBier({ duration }) {
  const [timerIsActive, setTimerIsActive] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(duration);
  const intervalRef = useRef(null);

  // countdown effect
  useEffect(() => {
    if (timerIsActive) {
      intervalRef.current = setInterval(() => {
        setTimeRemaining((prevTime) => {
          if (prevTime <= 100) {
            clearInterval(intervalRef.current);
            setTimerIsActive(false);
            //return duration; // reset when done
          }
          return prevTime - 100; //
        });
      }, 100);
    } else {
      clearInterval(intervalRef.current);
    }

    // cleanup
    return () => clearInterval(intervalRef.current);
  }, [timerIsActive]);

  // START STOP RESETS
  // const handleStartStop = () => {
  //   if (timerIsActive) {
  //     // Stop + reset
  //     clearInterval(intervalRef.current);
  //     setTimeRemaining(duration);
  //     setTimerIsActive(false);
  //   } else {
  //     // Start
  //     setTimerIsActive(true);
  //   }
  // };

  // START STOP PAUSES
  const handleStartStop = () => {
    setTimerIsActive((prev) => !prev);
  };

  const handleTimerReset = () => {
    clearInterval(intervalRef.current);
    setTimeRemaining(duration);
    setTimerIsActive(false);
  };

  const progress = timeRemaining / duration;

  return (
    <div className='container'>
      <div>
        <button onClick={handleStartStop}>
          {timerIsActive ? 'Stop' : 'Start'}
        </button>
        <button onClick={handleTimerReset}>Reset</button>
      </div>

      <div className='bier-container'>
        <div className='bier-progress-bar'>
          <div
            className='bier-progress-fill'
            style={{ height: `${progress * 100}%` }}
          />
        </div>
      </div>

      <p>{Math.ceil(timeRemaining / 1000)} seconds remaining</p>
    </div>
  );
}
