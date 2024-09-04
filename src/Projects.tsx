import React, { useState } from 'react';

interface ProjectsProps {
  isMobile: boolean;
}

function Projects({ isMobile }: ProjectsProps) {
    const [hoverChat, setHoverChat] = useState<boolean>(false);
    const [hoverLendaHand, setHoverLendaHand] = useState<boolean>(false);
    const [hoverReactorSuite, setHoverReactorSuite] = useState<boolean>(false);
    const [hoverAsdf, setHoverAsdf] = useState<boolean>(false);
    const [hoverRefhub, setHoverRefhub] = useState<boolean>(false);
    const [hoverObjectTracking, setHoverObjectTracking] = useState<boolean>(false);

    // Common class variables
    const linkColor: string = 'text-[#005A43]';
    const linkFontSize: string = isMobile ? 'text-xl' : 'text-2xl';
    const linkBase: string = `${linkColor} ${linkFontSize} font-light pt-[1vh]`;
    const spanBase: string = `text-white ${isMobile ? 'text-sm' : 'text-lg'} font-normal pt-[1vh]`;

    return (
    <div id="projects" className={`bg-[#1A1A1A] pl-[5vw] pr-[${isMobile ? '15vw' : '5vw'}] pb-[2vh]`}>
      <h2 className={`mt-0 mb-[10px] text-white font-normal ${isMobile ? 'text-2xl' : 'text-3xl'}`}>Projects</h2>

      { /* refhub.io */ }
      <div className="mb-[3px]">
        <a
        onMouseOver={() => {setHoverRefhub(true);}}
        onMouseLeave={() => {setHoverRefhub(false);}}
        target='_blank'
        rel='noreferrer'
        href='https://www.refhub.io'
        className={`${linkBase} ${hoverRefhub ? 'underline' : 'no-underline'}`}>
          - RefHub.io
        </a>
        <span className={spanBase}>
          &nbsp; 🧊 file sharing site for .referenceobjects - used for <a 
          onMouseOver={() => {setHoverObjectTracking(true)}} 
          onMouseLeave={() => {setHoverObjectTracking(false)}}
          className={`${linkColor} ${hoverObjectTracking ? 'underline' : 'no-underline'}`}
          href='https://youtu.be/kiSOmFVfNpc?si=1e2ZvVVyoiFmsAyg'
          >object tracking
          </a> in VisionOS
        </span>
      </div>
      { /* refhub.io */ }

      { /* asdf */ }
      <div className="mb-[3px]">
        <a
        onMouseOver={() => {setHoverAsdf(true);}}
        onMouseLeave={() => {setHoverAsdf(false);}}
        target='_blank'
        rel='noreferrer'
        href='https://asdf.matzelle.co'
        className={`${linkBase} ${hoverAsdf ? 'underline' : 'no-underline'}`}>
          - asdfType
        </a>
        <span className={spanBase}>
          &nbsp; 👨🏻‍💻 web typing game built with Next.js, FastAPI, and MongoDB
        </span>
      </div>
      { /* asdf */ }

      {/* Chat.tv */}
      <div className="mb-[3px]">
        <a
        onMouseOver={() => {setHoverChat(true);}}
        onMouseLeave={() => {setHoverChat(false);}} 
        href='https://github.com/brianmatzelle/Chat.tv/releases'
        target='_blank'
        rel='noreferrer' 
        className={`${linkBase} ${hoverChat ? 'underline' : 'no-underline'}`}>
          - AI Twitch.tv Chat
        </a>
      </div>
      {/* Chat.tv */}

      {/* LendaHand */}
      <div className="mb-[3px]">
          <a 
          href='https://devpost.com/software/lendahand-oq1snb'
          target='_blank'
          rel='noreferrer'
          onMouseOver={() => {setHoverLendaHand(true);}}
          onMouseLeave={() => {setHoverLendaHand(false);}}
          className={`${linkBase} ${hoverLendaHand ? 'underline' : 'no-underline'} pr-[1vw]`}>
            - LendaHand
          </a>
          <span className={spanBase}>
            &nbsp;🌟 2x HackBU 2023 Winner. Won Best Civic Engagement Hack Sponsored by J.P. Morgan, and Best Geo Hack Sponsored by CAE 
          </span>
      </div>
      {/* LendaHand */}

      {/* Reactor Suite */}
      <div className="mb-[3px]">
        <a
        href='https://suite.matzelle.co/'
        target='_blank'
        rel='noreferrer'
        onMouseOver={() => {setHoverReactorSuite(true);}}
        onMouseLeave={() => {setHoverReactorSuite(false);}}
        className={`${linkBase} ${hoverReactorSuite ? 'underline' : 'no-underline'} pr-[1vw]`}>
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