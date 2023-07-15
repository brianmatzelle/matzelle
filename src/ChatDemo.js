import React from 'react';

function ChatDemo({isMobile}) {
    // this component should have a header that says "Chat.tv Demo"
    // and a gif of the chat.tv demo located here: https://raw.githubusercontent.com/brianmatzelle/AI-Twitch-Chat/master/demo/demo.gif

    return (
        <div id="chat-demo" style={{
            backgroundColor: '#1A1A1A',
            paddingLeft: '5vw',
            paddingRight: '2vw',
            display: 'flex',
            flexDirection: 'column',
            alignItems: (isMobile ? 'flex-start' : 'flex-end'),
            justifyContent: 'flex-start',
            marginLeft: (isMobile ? '0vw' :'-5vw'),
            width: (isMobile ? '100vw' : 'auto'),
        }}>
            <h2 style={{
                paddingTop: '2vh',
                color: 'white',
                fontWeight: '400',
                fontSize: '14px',
                marginTop: (isMobile ? '0vh' : '-15vh'),
            }}>Chat.tv Demo</h2>
            {/* <a href='https://github.com/brianmatzelle/AI-Twitch-Chat'> */}
            <img src="https://raw.githubusercontent.com/brianmatzelle/AI-Twitch-Chat/master/demo/demo.gif" alt="Chat.tv Demo" style={{
                width: '55%',
                height: 'auto',
            }}/>
            {/* </a> */}
        </div>
    );
}

export default ChatDemo;