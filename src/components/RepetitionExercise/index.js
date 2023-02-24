import React, { useState } from 'react';

function RepetitionExercise({ name, onBackClick }) {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>{name}</h1>
      <p>Reps: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Complete Rep</button>
      <button onClick={() => setCounter(0)}>Reset Counter</button>
      <button onClick={onBackClick}>Return</button>
    </div>
  );
}

export default RepetitionExercise;
