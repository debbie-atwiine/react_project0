import './App.css';

const Person = () => {
  return (
    <>
      <h1>First Name: Jane</h1>
      <h1>Last Name: Doe</h1>
      <h1>Email: janedoe@test.com </h1>
    </>
  )
}

const App = () => {
  return (
    <div className="App">
      <Person/>
    </div>
  );
}

export default App;
