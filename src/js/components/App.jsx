// React imports
import React, { useState, useEffect } from 'react';
import SimpleBar from 'simplebar-react';
import Bubble from './Bubble';
import Post from './Post';
import Heading from './Heading';

// Component imports
import 'simplebar/dist/simplebar.min.css';

// ===== End of imports ===== //

// ==== Defining the default app ===== //
const App = () => {
  const title = 'Digital Culture Group Project';
  const [isWide, setIsWide] = useState(window.innerWidth > 1015);

  const checkSize = () => {
    setIsWide(window.innerWidth > 1015);
    console.log(isWide);
  };

  useEffect(() => {
    window.addEventListener('resize', checkSize);

    return (
      () => window.removeEventListener('resize', checkSize)
    );
  });

  return (
    <div className='app'>
      {isWide ? <h1>{title}</h1> : ''}

      <div className='container'>
        <SimpleBar className='container__scroll'>
          {!isWide ? <h1 className='in-phone'>{title}</h1> : ''}
          <Heading>Lorem ipsum dolor sit amet</Heading>
          <Bubble>
            Lorem ipsum dolor sit amet
          </Bubble>
          <Bubble>
            Consectetur adipiscing elit
          </Bubble>
          <Bubble left>
            Nullam ante lorem, elementum eget convallis sit amet, luctus quis quam. Donec et massa dui. Integer euismod nunc nec lorem eleifend, sed dictum odio rhoncus
          </Bubble>
          <Bubble>
            Curabitur augue tellus, vehicula eu orci vitae, lacinia facilisis odio. Pellentesque efficitur mi at nisl blandit, sit amet pretium arcu fermentum
          </Bubble>
          <Bubble left>
            Aliquam consectetur at mi sed blandit. Mauris malesuada non dolor non vestibulum
          </Bubble>

          <Post
            title='Title of image'
            src=''
            desc='Small text to explain the image'
          />
          <Bubble>
            Lorem ipsum dolor sit amet
          </Bubble>
          <Bubble>
            Consectetur adipiscing elit
          </Bubble>

          <Heading>Lorem ipsum dolor sit amet</Heading>
          <Bubble left>
            Nullam ante lorem, elementum eget convallis sit amet, luctus quis quam. Donec et massa dui. Integer euismod nunc nec lorem eleifend, sed dictum odio rhoncus
          </Bubble>
          <Bubble>
            Curabitur augue tellus, vehicula eu orci vitae, lacinia facilisis odio. Pellentesque efficitur mi at nisl blandit, sit amet pretium arcu fermentum
          </Bubble>
          <Bubble left>
            Aliquam consectetur at mi sed blandit. Mauris malesuada non dolor non vestibulum
          </Bubble>

          <Post
            title='Title of image'
            src=''
            desc='Small text to explain the image'
          />

          {!isWide
            ? (
              <div className='authors authors--in-phone'>
                <p>By:</p>
                <p>Firstname LASTNAME</p>
                <p>Firstname LASTNAME</p>
                <p>Firstname LASTNAME</p>
                <p>Firstname LASTNAME</p>
              </div>
            )
            : ''}
        </SimpleBar>

        {isWide
          ? (
            <div className='authors'>
              <p>By:</p>
              <p>Firstname LASTNAME</p>
              <p>Firstname LASTNAME</p>
              <p>Firstname LASTNAME</p>
              <p>Firstname LASTNAME</p>
            </div>
          )
          : ''}

      </div>

    </div>
  );
};
export default App;