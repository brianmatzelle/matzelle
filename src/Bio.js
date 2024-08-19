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
  const paraFontSize = isMobile ? '16px' : '24px'; // 24px on desktop, 18px on mobile (767px)
  const linkFontSize = isMobile ? '14px' : '18px'; // 18px on desktop, 14px on mobile (767px)

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
  
  return (
    <div
      className="name-container h-[fit-content]"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingLeft: '5vw',
        paddingTop: '2vh',
        marginRight: isMobile ? '30vw' : '0vw', // 5vw on mobile, 0vw on desktop (767px)
      }}
    >
      <h1
        style={{
          color: 'white',
          fontSize: isMobile ? '28px' : '38px', // 48px on desktop, 36px on mobile (767px)
          fontWeight: '400',
        }}
      >
        {/* Brian Matzelle */}
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
      <span
        style={{
          color: 'white',
          fontSize: paraFontSize,
          fontWeight: '350',
        }}
      >
        I'm an Associate Software Engineer at&nbsp;
        <a className='text-[#005A43] hover:underline' href='https://sagesure.com/'>SageSure</a>
      </span>
      <span
        style={{
          paddingTop: '2vh',
          color: 'white',
          fontSize: paraFontSize,
          fontWeight: '350',
        }}
      >
        I have experience w/ fullstack development,
      </span>
      <span
        style={{
          color: 'white',
          fontSize: paraFontSize,
          fontWeight: '350',
        }}
      >
        machine learning & finetuning LLMs,
      </span>
      <span
        style={{
          color: 'white',
          fontSize: paraFontSize,
          fontWeight: '350',
        }}
      >
        and data science/building pipelines.
      </span>
      <a
        href="mailto: brian@matzelle.co"
        className='hover:underline'
        style={{
          paddingTop: '2vh',
          color: '#005A43',
          fontSize: linkFontSize,
          fontWeight: '350',
        }}
      >
        brian@matzelle.co
      </a>

      <GitHub linkFontSize={linkFontSize} />
      <LinkedIn linkFontSize={linkFontSize} />
      <SoundCloud linkFontSize={linkFontSize} />
      <Resume linkFontSize={linkFontSize}/>
    </div>
  );
}    
