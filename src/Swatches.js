import React from 'react';
import Swatch from './Swatch';
import './Swatches.css'

const Swatches = ({ colors, handleClick }) => (
  <div className='Swatches'>
    {colors.map((color, index) => (
      <Swatch key={index} color={color} handleClick={handleClick} />
    ))}
  </div>
);

export default Swatches;