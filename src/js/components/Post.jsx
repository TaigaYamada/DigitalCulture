// React imports
import React from 'react';

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
    <div className='post'>
      <h3>{title}</h3>
      <div style={{ backgroundImage : `url(${src})` }} />
      {(desc === '' ? '' : <p>{desc}</p>)}
    </div>
  );
};

export default Post;