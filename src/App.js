import React from "react"
import './App.css';
import Button from './ButtonSubModule/src/App';

function App() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="App">
      <Button onClick={handleClick}>Click Me</Button>

    </div>
  );
}

export default App;
