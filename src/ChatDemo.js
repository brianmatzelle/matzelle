import React from 'react';

function ChatDemo({ isMobile }) {
    return (
        <div id="chat-demo" className={`
            flex flex-col
            ${isMobile ? 'items-start w-full mt-0' : 'items-end -ml-[5vw] mt-[-4vh]'}
            ${isMobile ? 'pr-0' : 'pr-[2vw]'}
        `}>
            <h2 className={`
                pt-[2vh] text-white font-normal text-sm pl-[5vw]
                ${isMobile ? 'mt-0' : 'mt-[-24vh]'}
            `}>
                AI Twitch.tv Chat demo
            </h2>
            <img 
                src="https://raw.githubusercontent.com/brianmatzelle/AI-Twitch-Chat/master/demo/demo.gif" 
                alt="Chat.tv Demo" 
                className={`
                    w-[55%] h-auto pl-[5vw] min-w-[300px]
                    ${isMobile ? 'pb-[5vh]' : 'pb-[1vh]'}
                `}
            />
        </div>
    );
}

export default ChatDemo;