import React, { useState } from 'react';
import Swatches from './Swatches';
import './App.css'

const App = () => {
  const [colors, setColors] = useState(generateRandomColors());
  const [answer, setAnswer] = useState('no answer');

  function generateRandomColor() {
    const color = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
    return color;
  }

  function generateRandomColors() {
    const color1 = `#${generateRandomColor()}${generateRandomColor()}${generateRandomColor()}`;
    const color2 = `#${generateRandomColor()}${generateRandomColor()}${generateRandomColor()}`;
    const color3 = `#${generateRandomColor()}${generateRandomColor()}${generateRandomColor()}`;
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