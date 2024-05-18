import React, { useState } from 'react';

function Projects({ isMobile }) {
    const [hoverChat, setHoverChat] = useState(false);
    const [hoverLendaHand, setHoverLendaHand] = useState(false);
    const [hoverAudioSynthesizer, setHoverAudioSynthesizer] = useState(false);
    const [hoverReactorSuite, setHoverReactorSuite] = useState(false);
    const [hoverAsdf, setHoverAsdf] = useState(false);

    const paraFontSize = isMobile ? '12px' : '16px';
    const projFontSize = isMobile ? '18px' : '20px';

    const expandProject = (project) => {
      console.log(project);
    }

    return (
    <div id="projects" style={{ 
        backgroundColor: '#1A1A1A',
        paddingLeft: '5vw',
        paddingRight: (isMobile ? '15vw' : '5vw'), // 5vw on mobile, 0vw on desktop (767px)
        paddingBottom: '2vh',
    }}>
      <h2 style={{
        // paddingTop: '2vh',
        marginTop: '0px',
        marginBottom: '10px',
        color: 'white',
        fontWeight: '400',
        fontSize: (isMobile ? '24px' :'32px'),
      }}>Projects</h2>

      { /* asdf */ }
      <div style={{marginBottom: '3px'}}>
        <a
        onMouseOver={() => {expandProject('asdf'); setHoverAsdf(true);}}
        onMouseLeave={() => {setHoverAsdf(false);}}
        target='_blank'
        rel='noreferrer'
        href='https://asdf.matzelle.co'
        style={{
          color: '#005A43',
          fontSize: projFontSize,
          fontWeight: '350',
          textDecoration: (hoverAsdf ? 'underline' : 'none'),
          paddingTop: '1vh',
        }}>- asdfType</a>
        <span style={{
            color: 'white',
            fontSize: paraFontSize,
            fontWeight: '350',
            textDecoration: 'none',
            paddingTop: '1vh',
        }}>&nbsp; 👨🏻‍💻 Web typing game built with Next.js, FastAPI, and MongoDB
        </span>
      </div>
      { /* asdf */ }

      {/* Chat.tv */}
      <div style={{marginBottom: '3px'}}>
        <a
        onMouseOver={() => {expandProject('Chat.tv'); setHoverChat(true);}}
        onMouseLeave={() => {setHoverChat(false);}} 
        href='https://github.com/brianmatzelle/Chat.tv/releases'
        target='_blank'
        rel='noreferrer' 
        style={{
          color: '#005A43',
          fontSize: projFontSize,
          fontWeight: '350',
          textDecoration: (hoverChat ? 'underline' : 'none'),
          paddingTop: '1vh',
        }}>- AI Twitch.tv Chat</a>
      </div>
      {/* Chat.tv */}

      {/* LendaHand */}
      <div style={{marginBottom: '3px'}}>
          <a 
          // href='https://github.com/brianmatzelle/LendaHand' 
          href='https://devpost.com/software/lendahand-oq1snb'
          target='_blank'
          rel='noreferrer'
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

      {/* Reactor Suite */}
      <div style={{marginBottom: '3px'}}>
        <a
        href='https://suite.matzelle.co/'
        target='_blank'
        rel='noreferrer'
        onMouseOver={() => {expandProject('Reactor Suite'); setHoverReactorSuite(true);}}
        onMouseLeave={() => {setHoverReactorSuite(false);}}
        style={{
          color: '#005A43',
          fontSize: projFontSize,
          fontWeight: '350',
          textDecoration: (hoverReactorSuite ? 'underline' : 'none'),
          paddingTop: '1vh',
          paddingRight: '1vw',
        }}>- Reactor Suite</a>
        <span style={{
            color: 'white',
            fontSize: paraFontSize,
            fontWeight: '350',
            textDecoration: 'none',
            paddingTop: '1vh',
        }}>

        </span>
      </div>
      {/* Reactor Suite */}

      {/* Audio Synthesizer */}
      <div style={{marginBottom: '3px'}}>
        <a 
        href='https://github.com/brianmatzelle/AudioSynth' 
        target='_blank'
        rel='noreferrer'
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
