// React imports
import React from 'react';
import Fade from 'react-reveal/Fade';

// Component imports

// ===== End of imports ===== //

const Heading = (props) => {
  // Assigning props to variables
  const {
    id,
    children
  } = props;

  return (
    <Fade
      left
      duration={500}
      distance='1rem'
    >
      <h2 id={id}>{children}</h2>
    </Fade>
  );
};

export default Heading;