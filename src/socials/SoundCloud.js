import React, { useState } from 'react';
import SoundCloudLogo from './assets/soundcloud-white.png';

export default function SoundCloud(props) {
    const [hoverSoundCloud, setHoverSoundCloud] = useState(false);
    return (
    <>
        <a
        href="https://soundcloud.com/blancsavant/hypochondriac"
        onMouseEnter={() => setHoverSoundCloud(true)}
        onMouseLeave={() => setHoverSoundCloud(false)}
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
            textDecoration: hoverSoundCloud ? 'underline' : 'none',
        }}
        >
            <img
            src={SoundCloudLogo}
            alt="SoundCloud Logo"
            style={{
                width: '16px',
                marginRight: '7px',
            }}/>
        SoundCloud
        </a>
    </>
    );
}