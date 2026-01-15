// NOTE TO SELF: 
// IF ADDING TO ANOTHER APP AS JUST A PROG BAR, MAKE THIS DUMB AND JUST PASS
// DURATION AND TIME REMAINING (OR WHATEVER). 
// STATE ET ALL ARE FOR BUTTONS

import { useState, useEffect, useRef } from 'react';
import bierstein from '../assets/beer-309778_1280.png'
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

      <div className='bier-png-container'>
        <div className='bier-progress-bar'>
          <div
            className='bier-png-progress-fill'
            style={{ height: `${progress * 100}%` }}
          />
        </div>
        <div className="bierstein-color"></div>
        <div className="bierstein">
          <img src={bierstein} alt="empty bierstein" />
        </div>
      </div>

      <p>{Math.ceil(timeRemaining / 1000)} seconds remaining</p>
    </div>
  );
}
