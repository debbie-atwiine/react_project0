import './App.css';

const Person = (props) => {
  return (
    <>
      <h1>First Name: {props.fname} </h1>
      <h3>Last Name: {props.lname}</h3>
      <h3>Age: {props.age} </h3>
    </>
  )
}

const App = () => {
  return (
    <div className="App">
      <Person fname='Jane' lname='Eyre' age={10 * 2} />
      <Person fname='John' lname='Doe' age={10 + 12} />
      <Person fname='Joy' lname='Reeves' age={49 / 2} />
    </div>
  );
}

export default App;
