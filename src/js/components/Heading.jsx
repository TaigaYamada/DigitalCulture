// React imports
import React from 'react';
import Fade from 'react-reveal/Fade';

// Component imports

// ===== End of imports ===== //

const Heading = (props) => {
  // Assigning props to variables
  const {
    children
  } = props;

  return (
    <Fade
      left
      duration={500}
      distance='1rem'
    >
      <h2>{children}</h2>
    </Fade>
  );
};

export default Heading;