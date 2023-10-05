import React, { useState } from "react";

export default function Resume({ linkFontSize }) {
  const [hoverLinkedIn, setHoverLinkedIn] = useState(false);
  return (
      <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: '.5vh',
        fontSize: linkFontSize,
        fontWeight: '350',
      }}
      >
        <span>🧾</span>
        <a
          href="https://github.com/brianmatzelle/matzelle/blob/main/src/socials/assets/Brian-Matzelle-resume.pdf"
          onMouseEnter={() => setHoverLinkedIn(true)}
          onMouseLeave={() => setHoverLinkedIn(false)}
          style={{
            color: '#005A43',
            textDecoration: hoverLinkedIn ? 'underline' : 'none',
            paddingLeft: '5px',
          }}
        >
        Resume
        </a>
      </div>
  );
}