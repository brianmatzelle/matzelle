import React from 'react';
import GitHubLogo from './assets/github-mark-white.svg';
import LinkedInLogo from './assets/linkedin-white.png';

export default function Bio(props){
    return (
        <div className='name-container' style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            paddingLeft: '5vw',
            paddingTop: '2vh',
          }}>
            <h1 style={{
                color: 'white',
                fontSize: '38px',
                fontWeight: '400',
            }}>
            Brian Matzelle
            </h1>
            <p1 style={{
                color: 'white',
                fontSize: '24px',
                fontWeight: '350'
            }}>
                Welcome, I'm a Computer Science senior at Binghamton University.
            </p1>
            <p2 style={{
                paddingTop: '2vh',
                color: 'white',
                fontSize: '24px',
                fontWeight: '350'
            }}>
                I have experience with full-stack development, 
            </p2>
            <p2 style={{
                color: 'white',
                fontSize: '24px',
                fontWeight: '350'
            }}>
                mobile development (iOS and Android),
            </p2>
            <p2 style={{
                color: 'white',
                fontSize: '24px',
                fontWeight: '350'
            }}>
                and artificial intelligence.
            </p2>
            <p3 style={{
                paddingTop: '2vh',
                color: 'white',
                fontSize: '24px',
                fontWeight: '350'
            }}>
                I'm currently looking for a software engineering internship.
            </p3>
            <a href='mailto: brian@matzelle.co' style={{
                paddingTop: '2vh',
                color: '#005A43',
                fontSize: '18px',
                fontWeight: '350'
            }}>
                brian@matzelle.co
            </a>
            <a href='https://github.com/brianmatzelle' style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                paddingTop: '1vh',
                color: '#005A43',
                fontSize: '18px',
                fontWeight: '350',
                textDecoration: 'none'
            }}>
                {/* Show GitHub logo svg from ./assets/github-mark-white.svg */}
                <img src={GitHubLogo} alt='GitHub Logo' style={{
                    height: '16px',
                    marginRight: '7px'
                }}/>
                GitHub
            </a>
            <a href='https://www.linkedin.com/in/brianmatzelle/' style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                paddingTop: '.5vh',
                color: '#005A43',
                fontSize: '18px',
                fontWeight: '350',
                textDecoration: 'none'
            }}>
                {/* Show GitHub logo svg from ./assets/github-mark-white.svg */}
                <img src={LinkedInLogo} alt='LinkedIn Logo' style={{
                    height: '16px',
                    marginRight: '7px',
                    borderRadius: '20%',
                }}/>
                LinkedIn
            </a>
        </div>
    );
}