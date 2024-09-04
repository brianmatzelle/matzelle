import React, { useEffect, useState } from 'react';
import Bio from './Bio.js';
import Mascot from './Mascot.js';
import Projects from './Projects.js';
import AnimatedCursor from "react-animated-cursor";
import ChatDemo from './ChatDemo.js';
// import Model from './Model.js';
import './App.css';
import HuggingFace from './components/HuggingFace.tsx';

function App() {
  // track window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(false);
  // const [chatInitiated, setChatInitiated] = useState(false);

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
    className='safe-area-container flex flex-col items-start gap-24'
    style={{
      backgroundColor: '#1A1A1A',
      display: 'flex',
      // alignItems: 'flex-start',
      // justifyContent: 'flex-start',
      minHeight: '100vh',
      height: '100%',
      width: '100%',
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
        justifyContent: 'space-between',
      }}>
        <Bio />
        {/* Only show mascot if not on mobile */}
        {!isMobile && <Mascot />}
      </div>

      
     {/* {!chatInitiated && <div
     style={{
      color: '#95969C',
      paddingLeft: '30vw',
      margin: '0px',
      fontSize: '14px',
     }}
    >Chat with Brian ↓
    </div>}
      <Model style={{
        paddingLeft: '5vw',
        // paddingTop: '2vh',
        marginTop: '1vh',
        paddingTop: chatInitiated ? '0px' : '3vh',
        width: isMobile ? '87vw' : '70vw', // 50vw on desktop, 80vw on mobile (767px)
        marginRight: isMobile ? '30vw' : '0vw', // 5vw on mobile, 0vw on desktop (767px)
        marginBottom: '20px',
      }} 
      setChatInitiated={setChatInitiated}
      /> */}

      <HuggingFace isMobile={isMobile} />

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
