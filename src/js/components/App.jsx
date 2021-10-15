// React imports
import React, { useEffect } from 'react';
import Bubble from './Bubble';
import Post from './Post';
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
        <div className='container'>
          <Bubble left={true}></Bubble>
          <Bubble left={true}></Bubble>
          <Bubble left={true}>Hello!</Bubble>
          <Bubble></Bubble>
          <Post></Post>
        </div>

      </div>
    </>
  );
};

export default App;