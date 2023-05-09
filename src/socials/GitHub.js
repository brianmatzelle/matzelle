import React, { useState } from 'react';
import GitHubLogo from './assets/github-mark-white.svg';

export default function GitHub(props) {
    const [hoverGitHub, setHoverGitHub] = useState(false);

    return (
    <>
        <a
            href="https://github.com/brianmatzelle"
            onMouseEnter={() => setHoverGitHub(true)}
            onMouseLeave={() => setHoverGitHub(false)}
            style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                paddingTop: '1vh',
                color: '#005A43',
                fontSize: props.linkFontSize,
                fontWeight: '350',
                textDecoration: hoverGitHub ? 'underline' : 'none',
            }}
        >
            <img
            src={GitHubLogo}
            alt="GitHub Logo"
            style={{
                height: '16px',
                marginRight: '7px',
            }}
            />
        GitHub
        </a>
    </>
    );
}