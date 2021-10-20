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
          <Post
            title='Student communication in WhatsApp'
            src=''
            desc='66% of students at the Sciences Po Le Havre campus answered that all of their student communication happens in WhatsApp (weighted average)'
          />

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
          <Bubble>
            Insert Cléa Part
          </Bubble>
          <Bubble>
          As previously underlined, the student community of ScPo seems to be mostly using WhatsApp to communicate b/w themselves
          </Bubble>
          <Bubble left>
            But why is that the case?
          </Bubble> 
          <Bubble>
          After discussing with seniors, we discovered that the Sciences Po Le Havre class of 2023 was the first cohort ever to have a WhatsApp group chat as the main communication platform. 
          </Bubble>
          <Bubble left>
          Why was there such a shift in platforms? 
          </Bubble>
          <Bubble>
          We asked this question to @user0186, a student with deep knowledge about the creation of the first Sciences Po Le Havre WhatsApp group chat!
          </Bubble>
          <Bubble left>
          There exists a Facebook group called “The Great Indian Dream” which was created to help Indian students to prepare their admission to foreign universities. 
          </Bubble>
          <Bubble left>
          In March 2019, one student told the group that he got into Sciences Po, and other students, who also got in, responded to the post and they started chatting
          </Bubble>
          <Bubble left>
          To make chatting easier, they created an inter campus group chat on Discord and shared the link on the Great Indian Dream Facebook group chat and on the Sciences Po & India Facebook group chat.
          </Bubble>
          <Bubble>
          However, Discord turned out to be very counterintuitive for new users. So students had to switch to WhatsApp, which was way easier to use.
          </Bubble>
          <Bubble left>
          But, the WhatsApp group chat soon reached its maximum number of members. So, the administrators suggested that they create separate WhatsApp chats for each campus. And this is how the WhatsApp group chats for all campuses were created. 
          </Bubble>
          <Bubble left>
          The number of members increased drastically when the results of the French admission procedure were released. The link to the group chat was shared on other social networks notably on Instagram. 
          </Bubble>
          <Bubble>
          Why did students give up on Messenger and choose WhatsApp instead?
          </Bubble>
          <Bubble left>
          According to @user0186, this is not linked to the cultural tendency of Indian students to use WhatsApp as their preferred communication platform
          </Bubble>
          <Bubble left>
          This shift in platforms is to be understood as a <b>generational move</b>. Nobody is really willing to use Messenger anymore because it has now become too old. 
          </Bubble>
          <Bubble>
          Even the BDE of every campus chose to follow the move and created the 2021 entrants WhatsApp chat, definitely giving up on Messenger. 
          </Bubble>
          <Bubble>
          The active role that the BDE played really shows how dramatic the consequences of the pandemic were on students’ perception of social interactions. They wanted to ensure the building of a strong digital student community in order to guarantee campus life both in person and online. 
          </Bubble>
      
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
          <Bubble>
            Zhuofan part
          </Bubble>
          <Bubble>
            We asked @darkshadow62617, a Japanese student of Sciences Po Le Havre, how he felt about the use of WhatsApp by the student community
          </Bubble>
          <Bubble left>
          “I didn’t know at all that everyone was using WhatsApp. And then in one class, I realized that (...) we are using WhatsApp so it is possible for students to create groups in five or six days so...I just needed to install it whether I wanted or not.”
          </Bubble>
          <Bubble>
          @darkshadow62617’s testimony confirms our survey’s data, in which 61% of respondents said that there had already been vital academic activities that were mainly being managed on WhatsApp. Therefore, in order to do group work, as mentioned by the interviewee, students must use WhatsApp
          </Bubble>
          <Post
            title='Most respondents think that there has been vital academic activities that were mainly managed on WhatsApp'
            src=''
            desc='61% of respondents think that there has been vital academic activities that were mainly managed on WhatsApp'
          />
          <Bubble>
          Therefore, students are coerced into using WhatsApp
          </Bubble>
          <Bubble left>
            @darkshadow62617 also added
          </Bubble>
          <Bubble left>
          “I think I’ll never send a message on the groupchat (...) There is a tendency of Japanese people where only a few people are active on group chats and most never talk.”
          </Bubble>
          <Bubble>
            Here, the student highlights a particularly interesting phenomenon
          </Bubble>
          <Bubble>
            According to @darkshadow62617, cultural differences might imply differences in ways of communicating. As such, the interviewee thinks that Japanese students might tend to be more shy than other students from other countries
          </Bubble>

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
           <Bubble>
           Al-Mothana M. Gasaymeh. (2017) ‘University Students’ use of Whatsapp and their Perceptions Regarding its Possible Integration into their Education’. Global Journal of Computer Science and Technology: G Interdisciplinary, Volume 17 Issue 1 Version 1.0 Year 2017.  Global Journals Inc. (USA)
            </Bubble>
          <Bubble left>
          Abbott, A. D., &amp; Alexander, J. C. (2004). Methods of discovery: Heuristics for the social sciences. W W Norton &amp; Company.
          </Bubble>
          <Bubble>
          Bastard, I., Cardon, D., Charbey, R., Cointet, J. &amp; Prieur, C. (2017). Facebook, pour quoi faire : Configurations d’activités et structures relationnelles. Sociologie, 8, 57-82.
          </Bubble>
          <Bubble left>
          Bhattacherjee, A. (2012). Social Science Research: Principles, Methods and Practices. Chapter 9: Survey Research.
          </Bubble>
          <Bubble>
          Bidart, C. &amp; Kornig, C. (2017). Facebook pour quels liens : Les relations des quadragénaires sur Facebook. Sociologie, 8, 83-100. 
          </Bubble>
          <Bubble left>
          Cardon, D. (2015). À quoi rêvent Les algorithmes: Nos vies à l'heure des big data.
          </Bubble>
          <Bubble>
          Creswell, J. W., &amp; Creswell, J. D. (2018). Research design: Qualitative, quantitative, and mixed methods approaches. SAGE Publications. 294-324
          </Bubble>
          <Bubble left>
          Creswell, J. W., &amp; Clark, V. L. (2011). Designing and conducting mixed methods research. SAGE. 58-89.
          </Bubble>
          <Bubble>
          Dagiral, É. (2010). L'articulation des sociabilités et des savoirs en tension : les réseaux sociaux et l'université. Transversalités, 116, 31-44. 
          </Bubble>
          <Bubble left>
          Dang Nguyen, G. &amp; Lethiais, V. (2016). Impact des réseaux sociaux sur la sociabilité: Le cas de Facebook. Réseaux, 195, 165-195. 
          </Bubble>
          <Bubble>
          Gutierrez, Ronald S.; McDougald, Jermaine S.; Rozo, Hugo A. (2020) ‘Facebook as a communication tool: Use and perceptions amongst undergraduate students’. Revista Espacios Vol. 41 (Number 04) Year 2020. Page 15 . 15-29.
          </Bubble>
          <Bubble left>
          Irfan, Mohammad; Dhimmar, Sonali. (2019) ‘Impact of WhatsApp Messenger on the University Level Students: A Psychological Study’. IJRAR February 2019, Volume 6, Issue 1. 572-586
          </Bubble>
          <Bubble>
          Liu, Chen-Chung; Yang, Chen-Yu; Chao, Po-Yao (2019). A longitudinal analysis of student participation in a digital collaborative storytelling activity. Educational Technology Research and Development, doi:10.1007/s11423-019-09666-3 
          </Bubble>
          <Bubble left>
          Melot Lionel, Strebelle Albert, Mahauden Jérôme, Depover Christian. Utilisation de Facebook en contexte universitaire. In: Sciences et Technologies de l'Information et de la Communication pour l'Éducation et la Formation, volume 24 n°1, 2017. Sélection de la conférence EIAH 2015. 107-122.
          </Bubble>
          <Bubble>
          Raman, Arumugam; Sani, Ruuhina Mohd; Kaur, Paramjit (2014). Facebook as a Collaborative and Communication Tool: A Study of Secondary School Students in Malaysia. Procedia - Social and Behavioral Sciences, 155(), 141–146.
          </Bubble>
          <Bubble left>
          Sheppard, Valerie. (2021). Research Methods for the Social Sciences: An Introduction Version. 
          </Bubble>
          <Bubble>
          Simon Bheki. Khoza (2020) ‘Students’ Habits Appear Captured by WhatsApp’. International Journal of Higher Education Vol. 9, No. 6; 2020. 307-317.
          </Bubble>
          <Bubble left>
          Wijaya, Armeria. (2017) ‘Students’ Responses Toward the Use of WhatsApp in Learning’. Journal of Teaching & Learning English in Multicultural Contexts Volume 2, Number 1. 46-56.
          </Bubble>
          {!isWide
            ? (
              <div className='authors authors--in-phone'>
                <p>By:</p>
                <p>Cléa SCHMITT</p>
                <p>Quitterie MAGNIN</p>
                <p>Taiga YAMADA</p>
                <p>Zhuofan ZU</p>
              </div>
            )
            : ''}
        </SimpleBar>

        {isWide
          ? (
            <div className='authors'>
              <p>By:</p>
              <p>Cléa SCHMITT</p>
              <p>Quitterie MAGNIN</p>
              <p>Taiga YAMADA</p>
              <p>Zhuofan ZU</p>
            </div>
          )
          : ''}

      </div>

    </div>
  );
};
export default App;