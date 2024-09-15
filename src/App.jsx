import React from "react";
import { useState } from "react";

function App() {
  // const [counter, setCounter] = useState(5);
  let [counter, setCounter] = useState(5);

  // let counter = 5;

  const addValue = () => {
    // console.log("Value Added", Math.random());
    // console.log("Value Added", counter);
    // counter = counter + 1;

    // setCounter(counter + 1);

    if (counter < 9999) {
      setCounter(counter + 1);
    } else {
      alert("Counter is 9999");
      setCounter((counter = 0));
    }
  };

  const resetValue = () => {
    setCounter((counter = 0));
  };

  const removeValue = () => {
    // console.log("Value Remove", counter);
    // setCounter(counter - 1);
    if (counter > 0) {
      setCounter(counter - 1);
    } else alert("Counter is 0");
  };

  return (
    //*THESE ARE CALLED React Fragments: <> </>
    //* Return a JSX element that represents the app
    <div className="black glow">
      <h1>React Counter</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Add Remove</button>
      <p>Footer: {counter}</p>
      <button onClick={resetValue}>Reset Counter</button>
    </div>
  );
}

export default App;
