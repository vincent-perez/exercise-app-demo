import React, { useState, useRef } from 'react';

function DurationExercise({ name, onBackClick }) {
  const [time, setTime] = useState({ minutes: 0, seconds: 0 });
  const [timerActive, setTimerActive] = useState(false);
  const intervalRef = useRef(null);

  function startTimer() {
    setTimerActive(true);
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => {
        const newSeconds = prevTime.seconds + 1;
        const newMinutes = prevTime.minutes + Math.floor(newSeconds / 60);
        return {
          minutes: newMinutes,
          seconds: newSeconds % 60,
        };
      });
    }, 1000);
  }

  function stopTimer() {
    setTimerActive(false);
    clearInterval(intervalRef.current);
  }

  function resetTimer() {
    setTime({ minutes: 0, seconds: 0 });
    setTimerActive(false);
    clearInterval(intervalRef.current);
  }

  return (
    <div>
      <h1>{name}</h1>
      <p>
        {time.minutes.toString().padStart(2, '0')}:
        {time.seconds.toString().padStart(2, '0')}
      </p>
      {!timerActive && (
        <button onClick={startTimer}>Start Timer</button>
      )}
      {timerActive && (
        <button onClick={stopTimer}>Stop Timer</button>
      )}
      <button onClick={resetTimer}>Reset Timer</button>
      <button onClick={onBackClick}>Return</button>
    </div>
  );
}

export default DurationExercise;