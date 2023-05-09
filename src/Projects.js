import React from 'react';

function Projects({ showProjects }) {
    // const height = showProjects ? '100vh' : '0vh';
    return (
    <div id="projects" style={{ 
        width: '100vw', 
        backgroundColor: '#1A1A1A',
        paddingLeft: '5vw',
    }}>
      <h2 style={{
        paddingTop: '2vh',
        color: 'white',
        fontWeight: '400',
        fontSize: '32px',
      }}>Projects</h2>

      {/* Chat.tv */}
      <a href='https://github.com/brianmatzelle/Chat.tv/releases/tag/alpha' style={{
        color: '#005A43',
        fontSize: '20px',
        fontWeight: '350',
        textDecoration: 'none',
        paddingTop: '1vh',
        }}>- Chat.tv</a>
      {/* Chat.tv */}

      {/* LendaHand */}
      <div>
          <a href='https://github.com/brianmatzelle/LendaHand' style={{
              color: '#005A43',
              fontSize: '20px',
              fontWeight: '350',
              textDecoration: 'none',
              paddingTop: '1vh',
              paddingRight: '1vw',
          }}>- LendaHand</a>
          <span style={{
              color: 'white',
              fontSize: '16px',
              fontWeight: '350',
              textDecoration: 'none',
              paddingTop: '1vh',
          }}>&nbsp;🌟 2x HackBU 2023 Winner. Won Best Civic Engagement Hack Sponsored by J.P. Morgan, and Best Geo Hack Sponsored by CAE </span>
      </div>
      {/* LendaHand */}

      {/* Audio Synthesizer */}
      <div>
        <a href='https://github.com/brianmatzelle/AudioSynth' style={{
            color: '#005A43',
            fontSize: '20px',
            fontWeight: '350',
            textDecoration: 'none',
            paddingTop: '1vh',
            paddingRight: '1vw',
        }}>- Audio Synthesizer</a>
        <span style={{
            color: 'white',
            fontSize: '16px',
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
