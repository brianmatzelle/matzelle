import React from 'react';

function Projects({ showProjects }) {
    // const height = showProjects ? '100vh' : '0vh';
    return (
    <div id="projects" style={{ 
        width: '100vw', 
        backgroundColor: '#1A1A1A',
        paddingLeft: '5vw',
    }}>
      {/* Add your projects content here */}
      <h2 style={{
        paddingTop: '2vh',
        color: 'white',
        fontWeight: '400',
        fontSize: '32px',
      }}>Projects</h2>
      <a href='https://github.com/brianmatzelle/Chat.tv/releases/tag/alpha' style={{
        color: '#005A43',
        fontSize: '20px',
        fontWeight: '350',
        textDecoration: 'none',
        paddingTop: '1vh',
        }}>- Chat.tv</a>
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
                fontSize: '15px',
                fontWeight: '350',
                textDecoration: 'none',
                paddingTop: '1vh',
            }}>&nbsp;🌟 2x HackBU 2023 Winner. Won Best Civic Engagement Hack Sponsored by J.P. Morgan, and Best Geo Hack Sponsored by CAE </span>
        </div>
    </div>
  );
}

export default Projects;
