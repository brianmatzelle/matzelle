import React, { useState, useEffect } from 'react';

function Projects({ showProjects }) {
    const [hoverChat, setHoverChat] = useState(false);
    const [hoverLendaHand, setHoverLendaHand] = useState(false);
    const [hoverAudioSynthesizer, setHoverAudioSynthesizer] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isMobile, setIsMobile] = useState(false);

    const paraFontSize = isMobile ? '12px' : '16px';
    const projFontSize = isMobile ? '18px' : '20px';

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

    const expandProject = (project) => {
      console.log(project);
    }

    return (
    <div id="projects" style={{ 
        backgroundColor: '#1A1A1A',
        paddingLeft: '5vw',
        paddingRight: (isMobile ? '15vw' : '5vw'), // 5vw on mobile, 0vw on desktop (767px)
    }}>
      <h2 style={{
        paddingTop: '2vh',
        color: 'white',
        fontWeight: '400',
        fontSize: (isMobile ? '24px' :'32px'),
      }}>Projects</h2>

      {/* Chat.tv */}
      <div>
        <a
        onMouseOver={() => {expandProject('Chat.tv'); setHoverChat(true);}}
        onMouseLeave={() => {setHoverChat(false);}} 
        href='https://github.com/brianmatzelle/Chat.tv/releases' 
        style={{
          color: '#005A43',
          fontSize: projFontSize,
          fontWeight: '350',
          textDecoration: (hoverChat ? 'underline' : 'none'),
          paddingTop: '1vh',
        }}>- Chat.tv</a>
      </div>
      {/* Chat.tv */}

      {/* LendaHand */}
      <div>
          <a 
          href='https://github.com/brianmatzelle/LendaHand' 
          onMouseOver={() => {expandProject('LendaHand'); setHoverLendaHand(true);}}
          onMouseLeave={() => {setHoverLendaHand(false);}}
          style={{
              color: '#005A43',
              fontSize: projFontSize,
              fontWeight: '350',
              textDecoration: (hoverLendaHand ? 'underline' : 'none'),
              paddingTop: '1vh',
              paddingRight: '1vw',
          }}>- LendaHand</a>
          <span style={{
              color: 'white',
              fontSize: paraFontSize,
              fontWeight: '350',
              textDecoration: 'none',
              paddingTop: '1vh',
          }}>&nbsp;🌟 2x HackBU 2023 Winner. Won Best Civic Engagement Hack Sponsored by J.P. Morgan, and Best Geo Hack Sponsored by CAE </span>
      </div>
      {/* LendaHand */}

      {/* Audio Synthesizer */}
      <div>
        <a 
        href='https://github.com/brianmatzelle/AudioSynth' 
        onMouseOver={() => {expandProject('Audio Synthesizer'); setHoverAudioSynthesizer(true);}}
        onMouseLeave={() => {setHoverAudioSynthesizer(false);}}
        style={{
          color: '#005A43',
          fontSize: projFontSize,
          fontWeight: '350',
          textDecoration: (hoverAudioSynthesizer ? 'underline' : 'none'),
          paddingTop: '1vh',
          paddingRight: '1vw',
        }}>- Audio Synthesizer</a>
        <span style={{
            color: 'white',
            fontSize: paraFontSize,
            fontWeight: '350',
            textDecoration: 'none',
            paddingTop: '1vh',
        }}>&nbsp; 🎉 Recognized as a Best in Class Project by Binghamton University Computer Science Department
        </span>
      </div>
      {/* Audio Synthesizer */}

    </div>
  );
}

export default Projects;
