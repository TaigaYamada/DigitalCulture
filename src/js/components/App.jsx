// React imports
import React, { useState, useEffect } from 'react';
import SimpleBar from 'simplebar-react';
import Bubble from './Bubble';
import Post from './Post';
import Heading from './Heading';
import Subheading from './Subheading';

// Component imports
import 'simplebar/dist/simplebar.min.css';

// ===== End of imports ===== //

// ==== Defining the default app ===== //
const App = () => {
  const title = 'The Sciences Po Digital Student Community';
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
                  Methodology
                </button>
              </li>
              <li>
                <button
                  type='button'
                  onClick={scrollToSection}
                >
                  Literature review
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
            <b>67%</b>
            {' '}
            of all student communications happen on WhatsApp
          </Bubble>
          <Bubble>
            Increasingly, our communications have become digital, and the SciencesPo Le Havre campus is no exception.
          </Bubble>
          <Bubble left>
            But as the above signifies, “digital communication” does not just happen anywhere. It is concentrated on certain platforms.
          </Bubble>
          <Bubble>
            Then, why or how did the communication platforms get chosen?
          </Bubble>
          <Bubble>
            What do these platforms do to the ways we communicate?
          </Bubble>
          <Bubble>
            These are the questions we set out to investigate.
          </Bubble>

          <Heading id='1'>Methodology</Heading>
          <Subheading id='0'>The website</Subheading>
          <Bubble>
            We decided to present our findings as an open source website. This choice was notably motivated by the fact that being open source embodies the original values on which the internet was built in the first place, namely:
          </Bubble>
          <Bubble>
            Openness, as in the free and unconstrained access to the website.
          </Bubble>
          <Bubble>
            Transparency, as in the public display of all actions and modifications that are being made on a website.
          </Bubble>
          <Bubble left>
            Furthermore, open source digital resources are more robust and can be shared more easily so as to make knowledge accessible to the larger population. We specifically chose to host our website on the platform GitHub (https://github.com/) to publish our work for free on the web, while embedding it in the context of an auto-regulated collaborative community of website builders and designers. We also got to use the collaborative features of GitHub during our group work, which allowed for a better arrangement of teamwork and greater efficiency in the elaboration of the final delivery.
          </Bubble>
          <Bubble left>
            The website in itself was created through the use of 3 different, but complementary, programming languages: HTML, CSS and Javascript. While HTML is used to build the static structure of the website, and CSS to stylize it, Javascript is used to include dynamic elements on the website.
          </Bubble>

          <Subheading id='0'>Investigation</Subheading>
          <Bubble>
            For our investigation, we relied on an explanatory sequential mixed methods research design, as this method allows us to get results closest possible to the reality of the digital student community while minimizing the limitations of qualitative and quantitative methods.
          </Bubble>
          <Bubble>
            By conducting an ‘inside the web’ (Cardon, 2015) separated and sequenced analysis of both quantitative and qualitative data, and merging them together, we built an interpretative framework of students’ behavior in the digital space.
          </Bubble>
          <Bubble>
            Our investigation was constituted of 2 steps:
          </Bubble>
          <Bubble left>
            <b>1. Collection of quantitative data on their use of discussion platforms, by means of exploratory standardized survey questionnaires.</b>
          </Bubble>
          <Bubble left>
            Using purposive sampling, we targeted a total of two Sciences Po Le Havre cohorts (population size approximating 300). Then, we designed two identical surveys which were each posted on either WhatsApp and Facebook cohort group chats so as to see the differences in voluntary responses according to the platform. Overall, 57 students responded to the survey, which represents about 19% of the student community.
          </Bubble>
          <Bubble>
            <b>2. Interviews with selected respondents on the basis of criteria.</b>
          </Bubble>
          <Bubble>
            We interviewed a total of 5 Sciences Po Le Havre students. For one category of interviewees, we relied on semi-structured interviews using pre-coded questions. These interviews aimed at learning the student’s relationship with the digital student community. For the second category of interviewees, who witnessed the creation process of the WhatsApp group chat first hand, we relied on an unstructured life-story interview methodology. All interviewees’ identity has been kept secret and their name replaced by a spontaneous username so as to ensure their anonymity.
          </Bubble>
          <Bubble left>
            However, before we commenced with our own data collection, the first step was the literature review. In order to align our investigation with pre-existing research, we collected second-hand data on the use of digital platforms by student communities.
          </Bubble>

          <Heading id='2'>Literature Review</Heading>
          <Bubble>
            By drawing upon pre-existing literature, our investigation combined various concepts elaborated by academic researchers and provided for an original approach to digital student communities. The existing literature on the topic of discussion platforms can be divided into 3 main categories.
          </Bubble>
          <Bubble left>
            <b>1. Use of digital platforms and community bonds within the student community.</b>
          </Bubble>
          <Bubble left>
            Literature on community building through the use of digital platforms at university attempts at describing students’ digital social life in a broader perspective. Research shows that the use of social media within the student community allows for the strengthening of ‘weak connections’ (Bastard,et al., 2017, pp.57). As such, students get to build their own, wider, social network by using strategies from both online and offline behavioral norms. This way, social networks in university allow to fill pre-existing ‘social voids’ (Dang Nguyen &amp; Lethiais, 2016, pp.172).
          </Bubble>
          <Bubble>
            <b>2. Use of digital platforms in classrooms and students’ academic achievements.</b>
          </Bubble>
          <Bubble>
            The academic literature that has been produced on the use of digital platforms in academic context is, for most part, optimistic about the implementation of new pedagogical strategies that include the use of social networks. The use of group chats in classrooms allows for mutual help between students and a greater sense of implication. As such, not only does enhanced communication permit a better understanding of the class material, but it also brings about greater confidence in the classroom environment. Researchers also show that texting enhances linguistic creativity and is a really promising tool to use for learning a language (Liu, et al., 2019).
          </Bubble>
          <Bubble left>
            <b>3. Identity construction and display on social networks.</b>
          </Bubble>
          <Bubble left>
            The literature on identity building and identity display online is mainly grounded in Goffman’s theory of symbolic interactionism (Goffman, 1973). Drawing upon Goffman’s work, Dominique Cardon establishes 4 identities that are being used by social networks’ users when interacting online: narrative, virtual, acting and civil (Cardon, 2008). He puts his theory of identities in practice in his concept of ‘auteurisation de soi’ on Facebook, which consists in making sense of practices of narrations of self and identity modification online (Cardon, 2011 in Bidart &amp; Kornig, 2017).
          </Bubble>

          <Heading id='3'>Platform Choice</Heading>
          <Subheading id='0'>Sciences Po student community on WhatsApp and Facebook</Subheading>
          <Bubble>
            Part to be added
          </Bubble>

          <Subheading id='0'>Landscape of platform choices</Subheading>
          <Bubble>
            Part to be added
          </Bubble>

          <Post
            title='India is the country with the most users of Facebook in the world'
            src=''
            desc='Top 10 countries with the most Facebook users, in millions. Source:Topic: Facebook. (2021, February 5). Statista. https://www.statista.com/topics/751/facebook.'
          />
          <Post
            title='India is also the country with the most WhatsApp users in the world'
            src=''
            desc='Top 10 countries with the most WhatsApp users, in millions. Source: Dean, B. (2021). SEO Training and Link Building Strategies – Backlinko. https://backlinko.com/whatsapp-users.'
          />

          <Post
            title='WhatsApp is also the most popular instant messaging app in the world'
            src=''
            desc='The most used instant messaging apps in the world, in millions of users. Source: Most popular messaging apps. (2021, April 20). Statista. https://www.statista.com/statistics/258749/most-popular-global-mobile-messenger-apps/.'
          />

          <Post
            title='The United States has the most Snapchat users in the world'
            src=''
            desc='Top 20 countries with the most users of Snapchat in the world, in million. Source: Countries with most Snapchat users 2021. (2021, July 21). Statista. https://www.statista.com/statistics/315405/snapchat-user-region-distribution/.'
          />

          <Post
            title='Age influences the use of Facebook'
            src=''
            desc='Evolution of the share of Facebook users according to age in France. Source: Asselin, C. (2021). Facebook Les chiffres essentiels en 2021 en France et dans Le monde. Social Media Listening and Analytics Blog - Digimind Blog. https://blog.digimind.com/fr/agences/facebook-chiffres-essentiels.'
          />

          <Subheading id='0'>From Messenger to WhatsApp</Subheading>
          <Bubble>
            As previously underlined, the student community of Sciences Po seems to be mostly using WhatsApp to communicate between themselves.
          </Bubble>
          <Bubble left>
            But why is that the case?
          </Bubble>
          <Bubble>
            After discussing with seniors, we discovered that the Sciences Po Le Havre class of 2023 was the first cohort ever to have a WhatsApp group chat as the main communication platform.
          </Bubble>
          <Bubble>
            Indeed, in earlier years, during the first week of September, BDE (Bureau Des Elèves, a student organization on the campus) created a group chat for the new cohorts on Messenger.
          </Bubble>
          <Bubble>
            Students from before adopted this platform to communicate between themselves, making Messenger the premier place of interaction in the digital student community.
          </Bubble>
          <Bubble left>
            Then why was there such a shift in platforms?
          </Bubble>
          <Bubble>
            We asked this question to @painauchocolatine, a student with firsthand knowledge about the creation of the first Sciences Po Le Havre WhatsApp group chat.
          </Bubble>
          <Bubble>
            The origin of the shift traces back to a Facebook group called “The Great Indian Dream”, which was created to help Indian students to prepare their admission to foreign universities.
          </Bubble>
          <Bubble>
            In March 2019, as the Indian applicants to Sciences Po started receiving their admission results, one student told the group that he got into Sciences Po, and other students, who also got in, responded to the post and started chatting. It is worth reminding that, as of March, BDE had not yet created the Messenger group chat for the new cohort, making ''The Great Indian Dream'' one of the few places future SciencesPo students were actually connected to each other.
          </Bubble>
          <Bubble>
            Empowered by the connections on “The Great Indian Dream” group, the Indian students initiated the creation of a student community even before BDE itself could take this role.
          </Bubble>
          <Bubble>
            To make the communication easier, the future students of SciencesPo created a group chat on Discord and shared the link on the Great Indian Dream Facebook group and on the “Sciences Po & India” Facebook group chat, which was created by the SciencesPo university itself in order to connect Indian students from Sciences Po. Note that at this point, the Discord group combined potential students from all campuses.
          </Bubble>
          <Bubble left>
            However, Discord turned out to be very counterintuitive for new users. It had specific vocabulary and a focus on specific types of communities So students switched to WhatsApp, which was way easier to use.
          </Bubble>
          <Bubble>
            But, the WhatsApp group chat soon reached its maximum number of members. So, the students managing the chat decided to create separate group chats for each campus. This is how each campus came to host a separate WhatsApp group chat.
          </Bubble>
          <Bubble>
            However, as the above recounts, the students initially met up with each other on Facebook. Then, the most obvious choice for the chat platform seems to be Messenger, as it is most closely integrated with Facebook.
          </Bubble>
          <Bubble left>
            Why did students give up on Messenger and choose WhatsApp instead?
          </Bubble>
          <Bubble left>
            According to @painauchocolatine, the student familiar with the initial setup of the WhatsApp group chat, this shift in platforms is to be understood as a generational move rather than a cultural or national one. Nobody is really willing to use Messenger anymore because it is now considered too old.
          </Bubble>
          <Bubble left>
            Although it was the Indian students that initiated this university-wide shift, @painauchocolatine believes that the primary reason for the change had nothing to do with their national adoption of WhatsApp.
          </Bubble>
          <Bubble>
            Indeed, as previously underlined, while India is the country in which WhatsApp is the most popular in, the use of WhatsApp is more widespread globally. Moreover, WhatsApp was already one of the dominant platforms among Sciences Po Le Havre students. As the data shows, nearly half of the respondents already had WhatsApp before entering SciencesPo, a value that is almost double that of Messenger.
          </Bubble>

          <Post
            title='WhatsApp is the discussion platform that was the mostly used by students before getting into Sciences Po'
            src=''
            desc=''
          />
          <Bubble>
            To summarize, Indian students were uniquely positioned to initiate the switch from Messenger to WhatsApp. They were connected with each other through the ''The Great Indian Dream'' group when others were not. Additionally, the early announcement of Indian admission results allowed the students to act before a Messenger group by BDE was set up.
          </Bubble>
          <Bubble>
            However, this switch seems to reflect a more general trend of generational preference for WhatsApp over Messenger amongst the young adults.
          </Bubble>
          <Bubble left>
            <b>This initiative on the part of the Indian students confirms the first insight from the literature review. Students that were connected through platforms were more empowered than others to bring about a large-scale change in the way they communicated. Although there was a larger background basis for the change, it was the connected few that acted on this potential.</b>
          </Bubble>
          <Bubble left>
            After the platform switch came about, BDE of every campus chose to follow the move and created the 2021 entrants group chat on WhatsApp, definitively giving up on Messenger.
          </Bubble>
          <Bubble left>
            Thus, the change of platform from Messenger to WhatsApp was institutionalized by BDE.
          </Bubble>
          <Bubble left>
            Since there has been a switch from Messenger to WhatsApp, one can expect there to be a shift from Facebook to WhatsApp as well.
          </Bubble>
          <Bubble left>
            However, this did not happen. In fact, to this day, Facebook is still actively used by the student community of Sciences Po Le Havre.
          </Bubble>
          <Bubble>
            Then, why are students still using Facebook?
          </Bubble>
          <Bubble>
            The answer to this question probably lies in the different communication format of Facebook compared to WhatsApp.
          </Bubble>
          <Bubble>
            As introduced earlier, communication on WhatsApp and Messenger is through text messages, while Facebook users publish posts on the platform.
          </Bubble>
          <Bubble>
            28% of our respondents specifically cited the forum format as the reason they may use one platform over another.
          </Bubble>
          <Bubble>
            @so2267 and @user9820 also surfaced platform-specific differences for Facebook during the interview as well.
          </Bubble>
          <Bubble left>
            Therefore, its unique format compared to WhatsApp and Messenger seems to have helped Facebook stay relevant in the  digital student community.
          </Bubble>
          <Bubble left>
            Now that the origin of the WhatsApp group and the reason Facebook still sees use is identified, we now turn to the discussion of how the choice of these platforms affect the ways in which students communicate to each other.
          </Bubble>

          <Heading id='4'>Discussions Within Platforms</Heading>
          <Bubble>
            Respondents on the survey displayed significant discretion in choosing what type of topic to discuss, depending on the topic.
          </Bubble>
          <Bubble>
            For example, 88% answered that to ask the classroom number that their next course takes place in, they would use WhatsApp.
          </Bubble>
          <Post
            title=' Majority of students would use WhatsApp to ask for a classroom’s number'
            src=''
            desc='Small text to explain the image'
          />
          <Bubble left>
            On the other hand, to discuss a topic regarding housing, 58% preferred Facebook and only 26% responded that they would use WhatsApp.
          </Bubble>
          <Post
            title='Students prefer using Facebook to announce that they want to pass on their apartment to other students'
            src=''
            desc=''
          />
          <Bubble>
            Other topics saw more divided views, like in the case of student associations related communication. 47% preferred Facebook while 41% advocated for WhatsApp.
          </Bubble>
          <Post
            title='Respondents are divided between choosing between WhatsApp or Facebook when planning a session with an association'
            src=''
            desc=''
          />
          <Bubble>
            As noted earlier, one of the major reasons for differing preference depending on the topic discussed was the forum versus chat format.
          </Bubble>
          <Bubble left>
            However, beyond the direct effect of the format of the communication, platforms seem to have fostered a different atmosphere.
          </Bubble>
          <Bubble left>
            @user9820 expressed during the interview that the WhatsApp community felt more familiar and close, while the Facebook group was impersonal and more for just displaying the information.
          </Bubble>
          <Bubble left>
            @so2267 echoed the same sentiment, pointing out that “Facebook is more about checking in on events that are going to happen, but there isn't a lot of communication”.
          </Bubble>
          <Bubble left>
            Although, it is also possible that the specificities of the communication format was at least in part responsible for this difference in the mood.
          </Bubble>
          <Bubble>
            In a chat, participants are constantly responding to one another. Whereas on Facebook, users each post their content on a forum. Although it is possible to comment and react to the posts, each post does not directly engage with each other.
          </Bubble>
          <Bubble>
            Whatever the initial cause was, today, the strongest cause that sustains this difference between the platforms is the power of social inertia.
          </Bubble>
          <Bubble>
            57% of the respondents answered that the reason they use different platforms was because “Everyone else uses this platform for this kind of things”.
          </Bubble>
          <Bubble left>
            <b>Role of WhatsApp in academic topics should be highlighted in this context.</b>
          </Bubble>
          <Bubble left>
            61% of all respondents considered that there was a “vital academic activity that was mainly managed on WhatsApp”.
          </Bubble>
          <Bubble left>
            In fact, one of the interviewees, @darkshadow62617, recalls that his classmates organized themselves on WhatsApp for one of his classes, stating “I just needed to install it whether I wanted or not”.
          </Bubble>
          <Bubble>
            <b>The second insight from the literature review was that connections through digital platforms assisted in students’ academic performance.</b>
          </Bubble>
          <Bubble>
            However, since the use of WhatsApp has become so prevalent in SciencesPo, the situation has changed.
          </Bubble>
          <Bubble>
            Here, having WhatsApp is the norm. On the other hand, not having WhatsApp hinders the students greatly, because they miss the “vital academic activity” that takes place there.
          </Bubble>
          <Bubble left>
            <b>The third point from the literature review is also relevant. The existing literature discusses the identity formation and behavior specific to digital communication.</b>
          </Bubble>
          <Bubble left>
            Our findings signifies that on top of there being a specific mode of communication in the digital sphere, students use various platforms in different ways.
          </Bubble>
          <Bubble left>
            Students felt a contrasting atmosphere in WhatsApp and Facebook. They have categorized the topics into what is appropriate in each platform. Most striking of all, this distinction is mainly sustained by the power of social inertia.
          </Bubble>
          <Bubble>
            Thus, students have decided to behave differently depending on the platforms not based on their individual understanding of the platforms, but because of the tradition formed in the small-scale society of the digital student community.
          </Bubble>
          <Bubble>
            However, this selective tendency of the individuals is by no means small. Regarding all of the topics we have surveyed, only 4% answered that they did not have any preference for which platform to use. In other words, in the overwhelming majority of the cases, students had a preference in mind for which topic to talk about is appropriate on what platform.
          </Bubble>

          <Heading id='5'>Conclusion</Heading>
          <Bubble>
            Our findings confirm and expand the literature in the field.
          </Bubble>
          <Bubble>
            SciencesPo digital student community is remarkably concentrated on WhatsApp group chat and Facebook.
          </Bubble>
          <Bubble left>
            Investigation of this phenomena first revealed that the choice of WhatsApp as the discussion platform was something radically new for the student community.
          </Bubble>
          <Bubble left>
            It also displayed the power of networks that uniquely positioned Indian students to initiate a change, which affected all campuses of SciencesPo.
          </Bubble>
          <Bubble left>
            The creators of the WhatsApp group chat weren’t the only cause of the shift, however. They were supported by the wider trend of generational preference towards WhatsApp.
          </Bubble>
          <Bubble>
            This choice in platforms then affected how the communication took place in the digital student community.
          </Bubble>
          <Bubble>
            Certain topics were asked on certain platforms. Students became careful to match their behaviors to the format in place, informed by the social inertia.
          </Bubble>
          <Bubble>
            Our investigation brought to light the mechanisms at work in the daily interactions of the students in SciencesPo Le Havre campus.
          </Bubble>

          <Heading id='6'>Bibliography</Heading>
          <Bubble left>
            Al-Mothana M. Gasaymeh. (2017) ‘University Students’ use of Whatsapp and their Perceptions Regarding its Possible Integration into their Education’. Global Journal of Computer Science and Technology: G Interdisciplinary, Volume 17 Issue 1 Version 1.0 Year 2017.  Global Journals Inc. (USA)
          </Bubble>
          <Bubble left>
            Abbott, A. D., &amp; Alexander, J. C. (2004). Methods of discovery: Heuristics for the social sciences. W W Norton &amp; Company.
          </Bubble>
          <Bubble left>
            Asselin, C. (2021). Facebook Les chiffres essentiels en 2021 en France et dans Le monde. Social Media Listening and Analytics Blog - Digimind Blog. https://blog.digimind.com/fr/agences/facebook-chiffres-essentiels
          </Bubble>
          <Bubble left>
            Asselin, C. (2021). Instagram, Les chiffres incontournables en 2021 France et monde. Social Media Listening and Analytics Blog - Digimind Blog. https://blog.digimind.com/fr/agences/instagram-chiffres-incontournables-2020-france-et-monde#monde
          </Bubble>
          <Bubble left>
            Asselin, C. (2021). Snapchat : Les derniers chiffres essentiels France et monde pour 2021. Social Media Listening and Analytics Blog - Digimind Blog. https://blog.digimind.com/fr/agences/snapchat-chiffres-essentiels-france-monde
          </Bubble>
          <Bubble left>
            Asselin, C. (2021). Twitter : Les derniers chiffres clés France et monde pour 2021. Social Media Listening and Analytics Blog - Digimind Blog. https://blog.digimind.com/fr/tendances/twitter-chiffres-essentiels-france-monde-2020
          </Bubble>
          <Bubble left>
            Bastard, I., Cardon, D., Charbey, R., Cointet, J. &amp; Prieur, C. (2017). Facebook, pour quoi faire : Configurations d’activités et structures relationnelles. Sociologie, 8, 57-82.
          </Bubble>
          <Bubble left>
            Bhattacherjee, A. (2012). Social Science Research: Principles, Methods and Practices. Chapter 9: Survey Research.
          </Bubble>
          <Bubble left>
            Bidart, C. &amp; Kornig, C. (2017). Facebook pour quels liens : Les relations des quadragénaires sur Facebook. Sociologie, 8, 83-100.
          </Bubble>
          <Bubble left>
            Cardon, D. (2015). À quoi rêvent Les algorithmes: Nos vies à l'heure des big data.
          </Bubble>
          <Bubble left>
            Creswell, J. W., &amp; Creswell, J. D. (2018). Research design: Qualitative, quantitative, and mixed methods approaches. SAGE Publications. 294-324
          </Bubble>
          <Bubble left>
            Creswell, J. W., &amp; Clark, V. L. (2011). Designing and conducting mixed methods research. SAGE. 58-89.
          </Bubble>
          <Bubble left>
            Dagiral, É. (2010). L'articulation des sociabilités et des savoirs en tension : les réseaux sociaux et l'université. Transversalités, 116, 31-44.
          </Bubble>
          <Bubble left>
            Dang Nguyen, G. &amp; Lethiais, V. (2016). Impact des réseaux sociaux sur la sociabilité: Le cas de Facebook. Réseaux, 195, 165-195.
          </Bubble>
          <Bubble left>
            Gutierrez, Ronald S.; McDougald, Jermaine S.; Rozo, Hugo A. (2020) ‘Facebook as a communication tool: Use and perceptions amongst undergraduate students’. Revista Espacios Vol. 41 (Number 04) Year 2020. Page 15 . 15-29.
          </Bubble>
          <Bubble left>
            Irfan, Mohammad; Dhimmar, Sonali. (2019) ‘Impact of WhatsApp Messenger on the University Level Students: A Psychological Study’. IJRAR February 2019, Volume 6, Issue 1. 572-586
          </Bubble>
          <Bubble left>
            LINE Business Group (2021). LINE for Business | LINE Marketing Solutions. https://www.linebiz.com/sites/default/files/media/jp/download/LINE%20Business%20Guide_202101-06_summary_v1.pdf
          </Bubble>
          <Bubble left>
            LINE｜いつもあなたのそばに。. (2021). LINE｜always at your side. https://line.me/ja/
          </Bubble>
          <Bubble left>
            Liu, Chen-Chung; Yang, Chen-Yu; Chao, Po-Yao (2019). A longitudinal analysis of student participation in a digital collaborative storytelling activity. Educational Technology Research and Development, doi:10.1007/s11423-019-09666-3
          </Bubble>
          <Bubble left>
            Melot Lionel, Strebelle Albert, Mahauden Jérôme, Depover Christian. Utilisation de Facebook en contexte universitaire. In: Sciences et Technologies de l'Information et de la Communication pour l'Éducation et la Formation, volume 24 n°1, 2017. Sélection de la conférence EIAH 2015. 107-122.
          </Bubble>
          <Bubble left>
            Messenger users in France. (2020). Engage and Support Customers on Social Media – NapoleonCat. https://napoleoncat.com/stats/messenger-users-in-france/2020/04/
          </Bubble>
          <Bubble left>
            Raman, Arumugam; Sani, Ruuhina Mohd; Kaur, Paramjit (2014). Facebook as a Collaborative and Communication Tool: A Study of Secondary School Students in Malaysia. Procedia - Social and Behavioral Sciences, 155(), 141–146.
          </Bubble>
          <Bubble left>
            Sheppard, Valerie. (2021). Research Methods for the Social Sciences: An Introduction Version.
          </Bubble>
          <Bubble left>
            Simon Bheki. Khoza (2020) ‘Students’ Habits Appear Captured by WhatsApp’. International Journal of Higher Education Vol. 9, No. 6; 2020. 307-317.
          </Bubble>
          <Bubble left>
            TikTok influencers: Audience distribution France 2020. (2021, June 15). Statista. https://www.statista.com/statistics/1139316/tiktok-user-distribution-age-gender-france
          </Bubble>
          <Bubble left>
            WhatsApp, WeChat and Facebook Messenger apps - Global useage of messaging apps, penetration and statistics. (2020, December 2). MessengerPeople. https://www.messengerpeople.com/global-messenger-usage-statistics/
          </Bubble>
          <Bubble left>
            Wijaya, Armeria. (2017) ‘Students’ Responses Toward the Use of WhatsApp in Learning’. Journal of Teaching & Learning English in Multicultural Contexts Volume 2, Number 1. 46-56.
          </Bubble>
          <Bubble left>
            日経ビジネス電子版. (2016, July 26). 「LINEは日本企業」、韓国親会社トップが言明. https://business.nikkei.com/atcl/report/16/060900044/071600007/
          </Bubble>
          <Bubble left>
            (2021). Zホールディングス株式会社. https://www.z-holdings.co.jp/ja/ir/presentations/earnings/main/02/teaserItems1/0/linkList/01/link/jp
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