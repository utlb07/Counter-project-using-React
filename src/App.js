import logo from './logo.svg';
import './App.css';
import { useState } from 'react'; // Corrected the case of useState

function App() {
  const [counter, setCounter] = useState(0); // Corrected the case of useState
  const addValue = () => {
    setCounter(counter + 1);
  }
  const removeval = () => {
    counter > 0 ? setCounter(counter - 1) : setCounter(0);
  }
  

  return (
    <>
      <h1>Chai and React</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeval}>Decrease Value</button>
    </>
  );
}

export default App;
