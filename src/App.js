import React, { useState } from 'react';
import Swatches from './Swatches';
import GenerateRandomColor from './GenerateRandomColor'
import './App.css'

function App() {
  const [colors, setColors] = useState(generateRandomColors());
  const [answer, setAnswer] = useState('no answer');

  <GenerateRandomColor />

  function generateRandomColors() {
    const color1 = `#${GenerateRandomColor()}${GenerateRandomColor()}${GenerateRandomColor()}`;
    const color2 = `#${GenerateRandomColor()}${GenerateRandomColor()}${GenerateRandomColor()}`;
    const color3 = `#${GenerateRandomColor()}${GenerateRandomColor()}${GenerateRandomColor()}`;
    return [color1, color2, color3];
  }

  function handleClick(color) {
    if (color === colors[0]) {
      setAnswer('correct');
    } else {
      setAnswer('incorrect');
    }
  }

  function handleReset() {
    setColors(generateRandomColors());
    setAnswer('no answer');
  }

  return (
    <div className='App'>
      <Swatches colors={colors} handleClick={handleClick} />
      <h2>{colors[0]}</h2>
      {answer === 'no answer' ? null : <p>{answer}</p>}
      <button onClick={handleReset}>Reset/Play</button>
    </div>
  );
};

export default App;