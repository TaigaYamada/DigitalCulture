// React imports
import React from 'react';
import Fade from 'react-reveal/Fade';

// Component imports

// ===== End of imports ===== //

const Post = (props) => {
  // Assigning props to variables
  const {
    title,
    src,
    desc
  } = props;

  return (
    <Fade
      bottom
      duration={500}
      distance='1rem'
    >
      <div className='post'>
        <h3>{title}</h3>
        <div style={{ backgroundImage : `url(${src})` }} />
        {(desc === '' ? '' : <p>{desc}</p>)}
      </div>
    </Fade>
  );
};

export default Post;