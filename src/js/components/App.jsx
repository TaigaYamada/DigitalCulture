// React imports
import React, { useEffect } from 'react';
import Bubble from './Bubble';
import Post from './Post';
// Component imports


// ===== End of imports ===== //

// ==== Defining the default app ===== //
const App = (props) => {
  // Assigning props to variables
  const {
  } = props;

  return (
    <>
      <div className='app'>
        <div className='container'>
          <Bubble>Hello!</Bubble>
          <Bubble left={true}>Hello!</Bubble>
          <Post></Post>
        </div>

      </div>
    </>
  );
};

export default App;