import { useState } from 'react';
import './App.css';


const App = () => {
  const [counter, setCounter] = useState(0)


  return (
    <div className="App">
      <button onClick={ () => setCounter((prevCount) => prevCount - 1) }> - </button> 
      <button> {counter} </button> 
      <button onClick={ () => setCounter((prevCount) => prevCount + 1) }> + </button> 
    </div>
  );
}

export default App;
