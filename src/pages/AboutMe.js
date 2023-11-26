import React from 'react';
import imgURL from './persona.png';

function AboutMe() {
  return (
    <div>
      <img src={imgURL } />
      <h1>This is QA environment.</h1>
      <h1>Weilin(William) Wang</h1>
      <p>This is QA environment. Hi, I am Weilin(William) Wang, I have a Master Degree in Electrical Engineering from New Jersey Institute of Technology in US. Over my 9 years's professional career, I have been carried out different roles such as sofeware developer, data analyst, bussiness analyst and project manager. In addition, I have worked in sofeware, pharmaceutical and financial industries. My skill set is throught the whole process of SDLC, from front-end to back-end. Thus I can handle differnet projects and different roles in the industry.</p>
      <p>The reason why i chose MCDA program is because I like the program structure, it covers all the skills we might need in the industry and even have the co-op terms. Also, I can learn from everyone in our cohort because everyone has several years' industry experience in different domains. I believe that's gonna help me a lot in the future job market.</p>
    </div>
  );
}

export default AboutMe;
