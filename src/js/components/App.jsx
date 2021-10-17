// React imports
import React, { useEffect } from 'react';
import Bubble from './Bubble';
import Post from './Post';

// Component imports
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

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
          <SimpleBar className='container__scroll'>
            <Bubble>
              Lorem ipsum dolor sit amet
            </Bubble>
            <Bubble>
              Consectetur adipiscing elit
            </Bubble>
            <Bubble left={true}>
              Nullam ante lorem, elementum eget convallis sit amet, luctus quis quam. Donec et massa dui. Integer euismod nunc nec lorem eleifend, sed dictum odio rhoncus
            </Bubble>
            <Bubble>
              Curabitur augue tellus, vehicula eu orci vitae, lacinia facilisis odio. Pellentesque efficitur mi at nisl blandit, sit amet pretium arcu fermentum
            </Bubble>
            <Bubble left={true}>
              Aliquam consectetur at mi sed blandit. Mauris malesuada non dolor non vestibulum
            </Bubble>


            <Post></Post>
          </SimpleBar>
        </div>

      </div>
    </>
  );
};

export default App;