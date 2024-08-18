import React, { useState } from 'react';
import LinkedInLogo from './assets/linkedin-white.png';

export default function LinkedIn(props) {
    const [hoverLinkedIn, setHoverLinkedIn] = useState(false);
    return (
    <>
        {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/brianmatzelle/"
        onMouseEnter={() => setHoverLinkedIn(true)}
        onMouseLeave={() => setHoverLinkedIn(false)}
        className='pl-1'
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          paddingTop: '.5vh',
          color: '#005A43',
          fontSize: props.linkFontSize,
          fontWeight: '350',
          textDecoration: hoverLinkedIn ? 'underline' : 'none',
        }}
      >
        <img
          src={LinkedInLogo}
          alt="LinkedIn Logo"
          style={{
            height: '16px',
            marginRight: '7px',
            borderRadius: '20%',
          }}
        />
        LinkedIn
      </a>
      {/* LinkedIn End */}
    </>
    );
}