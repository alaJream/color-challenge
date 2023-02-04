function GenerateRandomColor() {
    const color = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
    return color;
  }

  
export default GenerateRandomColor