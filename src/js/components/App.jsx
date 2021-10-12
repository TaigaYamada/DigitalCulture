// React imports
import React, { useEffect } from 'react';
import Bubble from './Bubble';
// Component imports


// ===== End of imports ===== //

// ==== Defining the default app ===== //
const App = (props) => {
  // Assigning props to variables
  console.log("Hello");

  const {
  } = props;

  return (
    <>
      <div className='app'>
        <Bubble left={true} ></Bubble>
        <Bubble></Bubble>
      </div>
    </>
  );
};

export default App;