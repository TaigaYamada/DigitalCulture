// React imports
import React from 'react';

// Component imports

// ===== End of imports ===== //

// How to use this Component
// <Bubble left={true} ></Bubble>
// <Bubble></Bubble>

const Bubble = (props) => {
  // Assigning props to variables
  const {
    left,
    children
  } = props;

  return (
    <div
      className={
        `bubble${left ? ' bubble--left' : ' bubble--right'}`
      }
    >
      <p>{children}</p>
    </div>
  );
};

export default Bubble;