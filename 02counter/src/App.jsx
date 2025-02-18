import { useState } from "react";

import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter((prevCount) => prevCount + 1);
  };

  function removeValue() {
    setCounter((prevCount) => prevCount - 1);
  }

  return (
    <>
      <h1>React course with hitesh</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <button onClick={removeValue}> remove value</button>
      <p>Footer: {counter}</p>
    </>
  );
}

export default App;
