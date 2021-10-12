// React imports
import React from 'react';

// Component imports


// ===== End of imports ===== //

// How to use this Component
// <Bubble left={true} ></Bubble>
// <Bubble></Bubble>

// ==== Defining the default app ===== //
const Bubble = (props) => {
  // Assigning props to variables
  console.log("Hello");

  const {
    left
  } = props;

  return (
    <>
      <div className={'bubble' + (left ? ' bubble--left' : ' bubble--right')} >

      </div>
    </>
  );
};

export default Bubble;