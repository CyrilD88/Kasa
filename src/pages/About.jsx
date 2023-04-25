import React from 'react';
import Collapse from '../components/Collapse';
import Banner from '../components/Banner';
import DataAbout from '../DonnéesAbout.json';

import "../styles/About.css"



function About (){
   
      
 
    return (
        <>
        <div className="main">
        <div className='About'>
                <Banner>
                    <div className="bannerTwo banner"></div>
                </Banner>
                <div className='about'>
                {DataAbout.map((test) => (
          <Collapse
            key={test.id}
            title={test.title}
            content={test.description}
          />
        ))}
                    
                </div>
     
        </div>
        </div>
 
        </>
    )
};

export default About;