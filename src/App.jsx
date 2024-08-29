import React from "react";
import { useState } from "react";

// Define the App component
const App = () => {
  // Use array destructuring to create a state variable `num` and an `setNum` function to update it
  const [num, setNum] = useState(0);

  // Define a function to increment the counter
  const addCounter = () => {
    // Update the state by adding 1 to the current value
    setNum(num + 1);
  };

  // Define a function to decrement the counter
  const lessCounter = () => {
    // Update the state by subtracting 1 from the current value
    setNum(num - 1);
  };

  return (
    //*THESE ARE CALLED React Fragments: <> </>
    //* Return a JSX element that represents the app
    <div className="black glow">
      {/* { // Display the title of the app */}
      <h1>React Counter</h1>
      {/* // Display the current counter value */}
      <h1>{num}</h1>
      {/* // Create a button to increment the counter */}
      <button onClick={addCounter}>Add </button>
      {/* // Create a button to decrement the counter */}
      <button onClick={lessCounter}>Delete </button>
      {/* 
      // Alternative way to display the buttons with the current counter value
      <button onClick={addCounter}>add {num}</button>
      <button onClick={lessCounter}>less {num}</button>
       */}
    </div>
  );
};

export default App;
