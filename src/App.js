import { useState, useEffect } from 'react';
import './App.css';


const App = () => {
  const [counter, setCounter] = useState(0)

  useEffect( () => {
    alert('Initial value of the counter has been set to 100');
    setCounter(100);
  }, [])

  return (
    <div className="App">
      <button onClick={ () => setCounter((prevCount) => prevCount - 1) }> - </button> 
      <button> {counter} </button> 
      <button onClick={ () => setCounter((prevCount) => prevCount + 1) }> + </button> 
    </div>
  );
}

export default App;
