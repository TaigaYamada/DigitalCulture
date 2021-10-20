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
          <Post
            title='Title of image'
            src=''
            desc='Small text to explain the image'
          />

          <Heading id='2'>Discussions Within the Platforms</Heading>
          <Heading id='3'>Literature Review</Heading>
          <Bubble>
          By drawing upon pre-existing literature, our investigation combined various concepts elaborated by academic researchers and provided for an original approach to digital student communities. The existing literature on the topic of discussion platforms can be divided into 3 main categories.
          </Bubble>
          <Bubble left>
          1. Use of digital platforms in classrooms and students’ academic achievements
          </Bubble>
          <Bubble left>
          The academic literature that has been produced on the use of digital platforms in academic context is, for most part, optimistic about the implementation of new pedagogical strategies that include the use of social networks. The use of group chats in classrooms allows for mutual help between students and a greater sense of implication. As such, not only does enhanced communication permit a better understanding of the class material, but it also brings about greater confidence in the classroom environment. Researchers also show that texting enhances linguistic creativity and is a really promising tool to use for learning a language (Liu, et al., 2019).
          </Bubble>
          <Bubble>
          2. Use of digital platforms and community bonds within the student community
          </Bubble>
          <Bubble>
          Literature on community building through the use of digital platforms at university goes beyond academic achievement and attempts at describing students’ digital social life in a broader perspective. Research shows that the use of social media within the student community allows for the strengthening of ‘weak connections’ (Bastard,et al., 2017, pp.57). As such, students get to build their own, wider, social network by using strategies from both online and offline behavioral norms. This way, social networks in university allow to fill pre-existing ‘social voids’ (Dang Nguyen &amp; Lethiais, 2016, pp.172). 
          </Bubble>
          <Bubble left>
          3. Identity construction and display on social networks
          </Bubble>
          <Bubble left>
          The literature on identity building and identity display online is mainly grounded in Goffman’s theory of symbolic interactionism (Goffman, 1973). Drawing upon Goffman’s work, Dominique Cardon establishes 4 identities that are being used by social networks’ users when interacting online: narrative, virtual, acting and civil (Cardon, 2008). He puts his theory of identities in practice in his concept of ‘auteurisation de soi’ on Facebook, which consists in making sense of practices of narrations of self and identity modification online (Cardon, 2011 in Bidart &amp; Kornig, 2017).  
          </Bubble>

          <Heading id='4'>Methodology</Heading>
          <Bubble>
          For our investigation, we relied on an explanatory sequential mixed methods research design, as this method allows to get results the closest possible to the reality of the digital student community while minimizing the limitations of qualitative and quantitative methods. By conducting an ‘inside the web’ (Cardon, 2015) separated and sequenced analysis of both quantitative and qualitative data, and merging them together, we built an interpretative framework of students’ behavior in the digital space.
          </Bubble>
          <Bubble>
          Our investigation was constituted of two steps:
          </Bubble>
          <Bubble left>
         1.  Collection of quantitative data on their use of discussion platforms, by means of exploratory standardized survey questionnaires 
          </Bubble>
          <Bubble left>
          Using purposive sampling, we targeted a total of two Sciences Po Le Havre cohorts (population size approximating 150). Then, we designed two identical surveys which were each posted on either WhatsApp and Facebook cohort group chats so as to see the differences in voluntary responses according to the platform. Overall, 58 students responded to the survey, which represents about 38.7% of the student community. 
          </Bubble>
          <Bubble>
          2. Face-to-face interviews with selected respondents on the basis of criteria
          </Bubble>
          <Bubble>
          We interviewed a total of 5 Sciences Po Le Havre students from. For one category of interviewees, we relied on semi-structured interviews using pre-coded questions. For the second category of interviewees, we relied on an unstructured life-story interview methodology. All interviewees’ identity has been kept secret and their name replaced by an username so as to ensure their anonymity. 
          </Bubble>
          <Bubble left>
          For our final delivery, we created an open source website hosted on the platform GitHub. This choice was notably motivated by the fact that open source websites embody particularly well the original values on which the internet was built in the first place, namely: 
          </Bubble>
          <Bubble>
          Openness, as in the free and unconstrained access to the website
          </Bubble>
          <Bubble>
          Transparency, as in the public display of all actions and modifications that are being made on a website. 
          </Bubble>
          < Bubble left>
          Furthermore, open source digital resources are more robust and can be shared more easily so as to make knowledge accessible to the larger population. We specifically chose to host our website on the platform GitHub (https://github.com/) so as to be able to publish our work for free on the web, while embedding it in the context of an auto-regulated collaborative community of website builders and designers. We also got to use the collaborative features of GitHub during our group work, which allowed for a better arrangement of teamwork and greater efficiency in the elaboration of the final delivery. 
          </Bubble>
          <Bubble>
          The website in itself was created through the use of 3 different, but complementary, programming languages: HTML, Sass and Javascript. While HTML is used to build the static structure of the website, and Sass to stylize it, Javascript is used to include dynamic elements on the website. 
          </Bubble>
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