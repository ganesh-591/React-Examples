import React from 'react';
import "./App.css";
import Child from "./components/Child";
const App = () => {
  const name="Ganesh";
  const age=23;
  const country="India";
  return (
    <div>
      <Child name={name} age={age} country={country} />
    </div>
  );
;}

export default App
