import React, { useState } from "react";

export default function Resume({ linkFontSize }) {
  const [hoverLinkedIn, setHoverLinkedIn] = useState(false);
  return (
      <div
      style={{
        display: 'flex',
        paddingTop: '.5vh',
        fontSize: linkFontSize,
        fontWeight: '350',
      }}
      >
        <span className="">🧾</span>
        <a
          href="https://github.com/brianmatzelle/matzelle/blob/main/src/socials/assets/Brian-Matzelle-resume.pdf"
          onMouseEnter={() => setHoverLinkedIn(true)}
          onMouseLeave={() => setHoverLinkedIn(false)}
          style={{
            color: '#005A43',
            textDecoration: hoverLinkedIn ? 'underline' : 'none',
          }}
        >
        Resume
        </a>
      </div>
  );
}