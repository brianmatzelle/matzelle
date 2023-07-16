import React, { useEffect, useState } from 'react';
import GitHub from './socials/GitHub';
import LinkedIn from './socials/LinkedIn';
import SoundCloud from './socials/SoundCloud';
import './Bio.css';

export default function Bio() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(false);
  const paraFontSize = isMobile ? '16px' : '24px'; // 24px on desktop, 18px on mobile (767px)
  const linkFontSize = isMobile ? '14px' : '18px'; // 18px on desktop, 14px on mobile (767px)
  const [hoverMedMetrix, setHoverMedMetrix] = useState(false);

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
      className="name-container"
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
        Brian Matzelle
      </h1>
      <p1
        style={{
          color: 'white',
          fontSize: paraFontSize,
          fontWeight: '350',
        }}
      >
        Welcome, I'm a Computer Science senior at Binghamton University.
      </p1>
      <p2
        style={{
          paddingTop: '2vh',
          color: 'white',
          fontSize: paraFontSize,
          fontWeight: '350',
        }}
      >
        I have experience with data ELT pipelines,
      </p2>
      <p2
        style={{
          color: 'white',
          fontSize: paraFontSize,
          fontWeight: '350',
        }}
      >
        mobile development (iOS and Android),
      </p2>
      <p2
        style={{
          color: 'white',
          fontSize: paraFontSize,
          fontWeight: '350',
        }}
      >
        and artificial intelligence.
      </p2>
      <p3
        style={{
          paddingTop: '2vh',
          color: 'white',
          fontSize: paraFontSize,
        }}
        >
        I'm currently a data engineer intern @ {' '}
        <a 
        onMouseOver={() => {setHoverMedMetrix(true);}}
        onMouseLeave={() => {setHoverMedMetrix(false);}}
        href='https://www.med-metrix.com/'
        style={{
          textDecoration: 'none',
        }}
        >
          <span
          style={{
            color: '#5656F0',
          }}
          >
            Med
          </span>
          <span
          style={{
            color: 'white',
          }}
          >
            -Metri
            <span
            className='x'
            >
            x
            </span>
          </span>
        </a>
      </p3>
      <a
        href="mailto: brian@matzelle.co"
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
      {/* <SoundCloud linkFontSize={linkFontSize} /> */}

    </div>
  );
}    
