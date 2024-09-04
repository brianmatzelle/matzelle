import React, { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import GitHub from './socials/GitHub';
import LinkedIn from './socials/LinkedIn';
import SoundCloud from './socials/SoundCloud';
import Resume from './socials/Resume';
import './Bio.css';

export default function Bio() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    if (windowWidth < 767) {
      setIsMobile(true);
    }
    else if (windowWidth >= 767) {
        setIsMobile(false);
    }
    return () => window.removeEventListener('resize', handleResize);
  }, [windowWidth]);

  const headingSize = isMobile ? 'text-[30px]' : 'text-[40px]';
  const paragraphSize = isMobile ? 'text-[18px]' : 'text-[26px]';
  const linkSize = isMobile ? 'text-[16px]' : 'text-[20px]';
  const commonTextStyles = 'text-white font-[350]';
  
  return (
    <div className={`name-container h-fit flex flex-col items-start justify-start pl-[5vw] pt-[2vh] ${isMobile ? 'mr-[30vw]' : 'mr-0'}`}>
      <h1 className={`${commonTextStyles} ${headingSize} font-normal`}>
        <TypeAnimation
          sequence={[
            ' Hi, I\'m Brian Matzelle',
            8000,
            ' a Software Engineer',
            1500,
          ]}
          wrapper="span"
          speed={40}
          repeat={Infinity}
        />
      </h1>
      <span className={`${commonTextStyles} ${paragraphSize}`}>
        I'm an Associate Software Engineer at&nbsp;
        <a className='text-[#005A43] hover:underline' href='https://sagesure.com/'>SageSure</a>
      </span>
      <span className={`pt-[2vh] ${commonTextStyles} ${paragraphSize}`}>
        I have experience w/ fullstack development,
      </span>
      <span className={`${commonTextStyles} ${paragraphSize}`}>
        machine learning & finetuning LLMs,
      </span>
      <span className={`${commonTextStyles} ${paragraphSize}`}>
        and data science/building pipelines.
      </span>
      <a
        href="mailto: brian@matzelle.co"
        className={`pt-[2vh] text-[#005A43] ${linkSize} font-[350] hover:underline`}
      >
        brian@matzelle.co
      </a>

      <GitHub linkFontSize={isMobile ? '16px' : '20px'} />
      <LinkedIn linkFontSize={isMobile ? '16px' : '20px'} />
      <SoundCloud linkFontSize={isMobile ? '16px' : '20px'} />
      <Resume linkFontSize={isMobile ? '16px' : '20px'}/>
    </div>
  );
}
