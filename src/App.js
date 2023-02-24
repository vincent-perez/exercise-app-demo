import React, { useState } from 'react';
import './App.css';
import RepetitionExercise from './components/RepetitionExercise';
import DurationExercise from './components/DurationExercise';
import WeightedExercise from './components/WeightedExercise';

function App() {
  const [exerciseType, setExerciseType] = useState(null);

  const handleExerciseClick = (type) => {
    setExerciseType(type);
  }

  const handleBackClick = () => {
    setExerciseType(null);
  }

  const renderExerciseScreen = () => {
    switch (exerciseType) {
      case "repetition-pushups":
        return <RepetitionExercise name="Pushups" onBackClick={handleBackClick} />;
      case "repetition-situps":
        return <RepetitionExercise name="Situps" onBackClick={handleBackClick} />;
      case "weighted-squats":
        return <WeightedExercise name="Squats" onBackClick={handleBackClick} />;
      case "duration-bicycling":
        return <DurationExercise name="Bicycling" onBackClick={handleBackClick} />;
      case "duration-jogging":
        return <DurationExercise name="Jogging" onBackClick={handleBackClick} />;
      case "weighted-curls":
        return <WeightedExercise name="Curls" onBackClick={handleBackClick} />;
      default:
        return (
          <div className="App">
            <header className="App-header">
              <p>Choose an exercise type:</p>
              <button onClick={() => handleExerciseClick("repetition-pushups")}>Pushups</button>
              <button onClick={() => handleExerciseClick("repetition-situps")}>Situps</button>
              <button onClick={() => handleExerciseClick("weighted-squats")}>Squats</button>
              <button onClick={() => handleExerciseClick("duration-bicycling")}>Bicycling</button>
              <button onClick={() => handleExerciseClick("duration-jogging")}>Jogging</button>
              <button onClick={() => handleExerciseClick("weighted-curls")}>Curls</button>
            </header>
          </div>
        );
    }
  }

  return (
    <>
      {renderExerciseScreen()}
    </>
  );
}

export default App;

