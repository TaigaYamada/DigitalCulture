// React imports
import React from 'react';
import Fade from 'react-reveal/Fade';

// Component imports

// ===== End of imports ===== //

const Subheading = (props) => {
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
      <h3 id={id}>{children}</h3>
    </Fade>
  );
};

export default Subheading;