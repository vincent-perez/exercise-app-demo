import React, { useState } from 'react';

function WeightedExercise({ name, onBackClick }) {
  const [counter, setCounter] = useState(0);
  const [weight, setWeight] = useState(0);

  return (
    <div>
      <h1>{name}</h1>
      <p>Reps: {counter}</p>
      <p>Weight (lbs): {weight}</p>
      <label>
        Enter weight (lbs):
        <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
      </label>
      <button onClick={() => setCounter(counter + 1)}>Complete Rep</button>
      <button onClick={() => setCounter(0)}>Reset Counter</button>
      <button onClick={onBackClick}>Return</button>
    </div>
  );
}

export default WeightedExercise;
