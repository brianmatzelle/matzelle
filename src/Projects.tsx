import React from 'react';

interface ProjectsProps {
  isMobile: boolean;
}

function Projects({ isMobile }: ProjectsProps) {

    // Common class variables
    const linkColor: string = 'text-[#005A43]';
    const linkFontSize: string = isMobile ? 'text-xl' : 'text-2xl';
    const linkBase: string = `${linkColor} ${linkFontSize} font-light pt-[1vh] hover:underline`;
    const spanBase: string = `text-white ${isMobile ? 'text-sm' : 'text-lg'} font-normal pt-[1vh]`;
    const projectBase: string = `mb-[3px]`;

    return (
    <div id="projects" className={`bg-[#1A1A1A] px-[5vw] pr-[${isMobile ? '15vw' : '5vw'}] pb-[2vh]`}>
      <h2 className={`mt-0 mb-[10px] text-white font-normal ${isMobile ? 'text-2xl' : 'text-3xl'}`}>Projects</h2>

      { /* refhub.io */ }
      <div className={projectBase}>
        <a
        target='_blank'
        rel='noreferrer'
        href='https://www.refhub.io'
        className={`${linkBase}`}>
          - RefHub.io
        </a>
        <span className={spanBase}>
          &nbsp; 🧊 file sharing site for .referenceobjects - used for <a 
          className={`${linkColor} hover:underline`}
          href='https://youtu.be/kiSOmFVfNpc?si=1e2ZvVVyoiFmsAyg'
          >object tracking
          </a> in VisionOS
        </span>
      </div>
      { /* refhub.io */ }

      { /* asdf */ }
      <div className={projectBase}>
        <a
        target='_blank'
        rel='noreferrer'
        href='https://asdf.matzelle.co'
        className={`${linkBase}`}>
          - asdfType
        </a>
        <span className={spanBase}>
          &nbsp; 👨🏻‍💻 web typing game built with Next.js, FastAPI, and MongoDB
        </span>
      </div>
      { /* asdf */ }

      {/* Chat.tv */}
      <div className={projectBase}>
        <a
        href='https://github.com/brianmatzelle/Chat.tv/releases'
        target='_blank'
        rel='noreferrer' 
        className={`${linkBase}`}>
          - AI Twitch.tv Chat
        </a>
      </div>
      {/* Chat.tv */}

      {/* LendaHand */}
      <div className={projectBase}>
          <a 
          href='https://devpost.com/software/lendahand-oq1snb'
          target='_blank'
          rel='noreferrer'
          className={`${linkBase}`}>
            - LendaHand
          </a>
          <span className={spanBase}>
            &nbsp;🌟 2x HackBU 2023 Winner. Won Best Civic Engagement Hack Sponsored by J.P. Morgan, and Best Geo Hack Sponsored by CAE 
          </span>
      </div>
      {/* LendaHand */}

      {/* Reactor Suite */}
      <div className={projectBase}>
        <a
        href='https://suite.matzelle.co/'
        target='_blank'
        rel='noreferrer'
        className={`${linkBase}`}>
          - Reactor Suite
        </a>
        <span className={spanBase}>
        </span>
      </div>
      {/* Reactor Suite */}
    </div>
  );
}

export default Projects;