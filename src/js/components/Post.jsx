// React imports
import React from 'react';

// Component imports


// ===== End of imports ===== //

const Post = (props) => {
  // Assigning props to variables
  const {
    left,
    children
  } = props;

  return (
    <>
      <div className={'post'} >
        {children}
      </div>
    </>
  );
};

export default Post;