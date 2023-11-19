import React from 'react';

import Navbar from './components/navbar.jsx';

import Profile from './components/profile.jsx';

import Post from './components/post.jsx';

const App = () => {

  return (

    <main className=" w-full h-full m-0 border, bg-white">

      <Navbar />

      <Profile />

      <Post
        
        title="Where we work"

        body="We will work on the different Technical projects and we build products in PP Infotech and we maintain everything clear and work life will be very good and healthy and the staff are very understandable and good coders. These are the things about the company"

        authorName="Pavan Bada"

        date="September 26"

        views={180}

      /><Post

      title="Company Passion"

      body="generative AI solutions offer a simple, conversational interface that harnesses the power of cutting-edge LLMs to seamlessly deliver business insights, manage and optimize hybrid cloud, and generate software code quickly."

      authorName="Pavan Bada"

      date="September 9"

      views={156}

    /><Post

    title="Requirements"

    body="Proficient in English, both written and spoken.
    Analytical thinking, creativity, empathy, and a deep understanding of the domain and audience requirements.
      JavaScript, HTML/CSS, NLP/ML, Java Coding, PHP, SQL, Swift)"

    authorName="Pavan Bada"

    date="August 22"

    views={150}

  /><Post

  title="Other mandatory requirements"

  body="Must physically reside in India.
   (No VPN/No IP Spoofing)
  Personal Laptop / Desktop and
   Stable High-Speed Internet
  Use of any AI Tool of chatbots is strictly prohibited."

  authorName="Pavan Bada"

  date="August 15"

  views={144}

/><Post

title="Benefits  "

body="Certificate of Professional Experience
 Excellent remote opportunity.
 The chance to engage with cutting-edge technology (Large language model)
 Attractive and competitive compensation.
 Industry exposure, working with a leading IT company."

authorName="Pavan Bada"

date="August 5"

views={196}

/>

    </main>

  );

};

export default App;