import React, { useEffect, useState } from 'react';
import Bio from './Bio.js';
import Mascot from './Mascot.js';
import Projects from './Projects.js';
import AnimatedCursor from "react-animated-cursor";
import ChatDemo from './ChatDemo.js';
import Model from './Model.js';
import './App.css';

function App() {
  // track window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(false);
  const [chatInitiated, setChatInitiated] = useState(false);

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
    className="safe-area-container"
    style={{
      backgroundColor: '#1A1A1A',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      minHeight: '100vh',
      height: '100%',
    }}>
      <AnimatedCursor
        innerSize={10}
        outerSize={10}
        color='0, 93, 64'
        outerAlpha={0.2}
        innerScale={0.5}
        outerScale={5}
      />
      <div className='name-and-mascot' style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
      }}>
        <Bio />
        {/* Only show mascot if not on mobile */}
        {!isMobile && <Mascot />}
      </div>
      
      <Model style={{
        paddingLeft: '5vw',
        // paddingTop: '2vh',
        // marginTop: '10vh',
        paddingTop: chatInitiated ? '0px' : '3vh',
        width: isMobile ? '87vw' : '70vw', // 50vw on desktop, 80vw on mobile (767px)
        marginRight: isMobile ? '30vw' : '0vw', // 5vw on mobile, 0vw on desktop (767px)
        marginBottom: '20px',
      }} 
      setChatInitiated={setChatInitiated}
      />

      <div
      className='projects-and-chattv-demo'
      style={{
        display: 'flex',
        flexDirection: (isMobile ? 'column' : 'row'),
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        width: '100vw',
      }}
      >
        <Projects isMobile={isMobile}/>
        <ChatDemo isMobile={isMobile} />
      </div>      
    </div>
  );
}

export default App;
