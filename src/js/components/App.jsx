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

  const scrollToSection = (e) => {
    // accessing li, the parent of the button
    const target = e.target.parentNode;

    // Getting array of headings in toc to determine the index of the clicked one
    const list = [...document.getElementById('toc').children];

    // Getting the corresponding header in the container
    const heading = document.getElementById(list.indexOf(target));

    // Actual scrolling
    heading.scrollIntoView({ behavior : 'smooth' });
  };

  const checkSize = () => {
    setIsWide(window.innerWidth > 1015);
    console.log(isWide);
  };

  // Re-checking the width to update the h1
  useEffect(() => {
    window.addEventListener('resize', checkSize);

    return (
      () => window.removeEventListener('resize', checkSize)
    );
  });

  return (
    <div className='app'>
      {isWide ? (
        <aside>
          <h1>{title}</h1>
          <div>
            <h2>Table of Contents</h2>
            <ul id='toc'>
              <li>
                <button
                  type='button'
                  onClick={scrollToSection}
                >
                  Introduction
                </button>
              </li>
              <li>
                <button
                  type='button'
                  onClick={scrollToSection}
                >
                  Platform Choice
                </button>
              </li>
              <li>
                <button
                  type='button'
                  onClick={scrollToSection}
                >
                  Discussions Within the Platforms
                </button>
              </li>
              <li>
                <button
                  type='button'
                  onClick={scrollToSection}
                >
                  Literature Review
                </button>
              </li>
              <li>
                <button
                  type='button'
                  onClick={scrollToSection}
                >
                  Methodology
                </button>
              </li>
              <li>
                <button
                  type='button'
                  onClick={scrollToSection}
                >
                  Conclusion
                </button>
              </li>
              <li>
                <button
                  type='button'
                  onClick={scrollToSection}
                >
                  Bibliography
                </button>
              </li>
            </ul>
          </div>
        </aside>
      ) : ''}

      <div className='container'>
        <SimpleBar className='container__scroll'>
          {!isWide ? <h1 className='in-phone'>{title}</h1> : ''}
          <Heading id='0'>Introduction</Heading>
          <Bubble left>
            On average, students at SciencesPo Le Havre campus answered that
            {' '}
            <b>[66%]</b>
            {' '}
            of all student communications happen on WhatsApp
          </Bubble>
          <Bubble>
            Increasingly, our communications have become digital, and the SciencesPo Le Havre campus is no exception
          </Bubble>
          <Bubble left>
            But as the above signifies, “digital communication” does not just happen anywhere. It happens on platforms
          </Bubble>
          <Bubble>
            Then, why or how did the communication platforms get chosen?
          </Bubble>
          <Bubble>
            What do these platforms do to the ways we communicate?
          </Bubble>
          <Bubble>
            These are the questions we set out to investigate
          </Bubble>

          <Heading id='1'>Platform Choice</Heading>

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

          <Bubble left>
            Luctus quis quam. Donec et massa dui. Integer euismod nunc nec lorem eleifend, sed dictum odio rhoncus
          </Bubble>
          <Bubble>
            Curabitur augue tellus, vehicula eu orci vitae, lacinia facilisis odio. Pellentesque efficitur mi at nisl blandit, sit amet pretium arcu fermentum
          </Bubble>
          <Bubble left>
            Aliquam consectetur at mi sed blandit. Mauris malesuada non dolor non vestibulum
          </Bubble>
          <Bubble left>
            Bis repetita placent
          </Bubble>
          <Bubble left>
            Bis repetita placent2
          </Bubble>
          <Bubble left>
            Bis repetita placent3
          </Bubble>
          <Post
            title='Title of image'
            src=''
            desc='Small text to explain the image'
          />

          <Heading id='2'>Discussions Within the Platforms</Heading>
          <Heading id='3'>Literature Review</Heading>
          <Heading id='4'>Methodology</Heading>
          <Heading id='5'>Conclusion</Heading>
          <Heading id='6'>Bibliography</Heading>

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