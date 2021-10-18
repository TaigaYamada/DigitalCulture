// React imports
import React from 'react';
import Fade from 'react-reveal/Fade';

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
    <Fade
      left={left}
      right={!left}
      duration={500}
      distance='1rem'
    >
      <div
        className={
          `bubble${left ? ' bubble--left' : ' bubble--right'}`
        }
      >
        <p>{children}</p>
      </div>
    </Fade>
  );
};

export default Bubble;