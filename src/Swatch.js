import React from 'react';

const Swatch = ({ color, handleClick }) => (
  <div
    onClick={() => handleClick(color)}
    style={{ width: 100, height: 100, backgroundColor: color }}
  />
);

export default Swatch;