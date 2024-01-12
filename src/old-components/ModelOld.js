import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

function UserMessage({ message }) {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'flex-end',
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                backgroundColor: '#005d40',
                borderRadius: '10px',
                padding: '10px',
                marginRight: '10px',
                marginBottom: '5px',
                color: 'white',
            }}>
                {message}
            </div>
        </div>
    );
}

function BotMessage({ message }) {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                backgroundColor: '#343541',
                borderRadius: '10px',
                padding: '10px',
                marginLeft: '3px',
                marginRight: '20vw',
                marginBottom: '5px',
                color: 'white',
            }}>
                {message}
            </div>
        </div>
    );
}
    
function Responses({ msgResponses }) {
    const messagesEndRef = useRef(null);
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
    };
    useEffect(scrollToBottom, [msgResponses]);

    return (
        <>
        {msgResponses.length > 1 &&
        <div
        style={{
            paddingBottom: '10px',
            // maxHeight: '30vh',
            overflowY: 'scroll',
            scrollbarWidth: 'none',
            // Firefox
            '&::-webkit-scrollbar': {
                display: 'none',
            },
            height: '40vh',
            borderLeft: '1px dotted #343541',
        }}
        >
            {msgResponses.map((msgResponse, i) => {
                return (
                    <div key={i}>
                        { msgResponse.role === 'user' ? 
                        <UserMessage message={msgResponse.content} /> 
                        : 
                        (msgResponse.role === 'assistant' ? <BotMessage message={msgResponse.content}/> : <></> ) }
                    </div>
                );
            })}
            <div ref={messagesEndRef} />
        </div>
        }
        </>
    );

}

function randomPlaceholder() {
    const placeholders = [
        'Why did you study computer science?',
        'What projects have you worked on?',
        'What are your hobbies?',
        'What\'s your favorite food?',
        'What do you value when working on a team?',
        'How was this built?',
        'Who\'s your favorite programmer?',
        'What\'s your favorite programming language?',
        'What are you currently up to?',
        'Are you working on any projects currently?',
    ];
    const randIdx = Math.floor(Math.random() * placeholders.length);
    return placeholders[randIdx];
}

const getMessage = async (msgResponses, setMsgResponses, message) => {
    setMsgResponses(prevMsgResponses => prevMsgResponses.concat({ "role": 'user', "content": message }));
    // const completion = await openai.chat.completions.create({
    //     messages: msgResponses.concat({ "role": 'user', "content": message }),
    //     model: finetunedModel,
    // });
    axios.post('http://143.244.158.64:8200/chat', {
        messages: msgResponses.concat({ "role": 'user', "content": message }),
    }).then((response) => {
        const completion = response.data;
        console.log(completion);
        const msgResponse = { "role": 'assistant', "content": completion.choices[0].message.content };
        setMsgResponses(prevMsgResponses => prevMsgResponses.concat(msgResponse));
    })
    .catch((error) => {
        console.log(error);
    });
    // console.log(completion);
    // const msgResponse = { "role": 'assistant', "content": completion.choices[0].message.content };
    // setMsgResponses(prevMsgResponses => prevMsgResponses.concat(msgResponse));
}

// const chatHistory = [
//     ["user", "Hello, I'm a user."],
//     ["bot", "Hello, I'm a bot."],
// ]

export default function Model({ setChatInitiated, style={} }) {
    const [message, setMessage] = useState('');
    const [msgResponses, setMsgResponses] = useState([
        {
            "role": "system", "content": "You are an extension of Brian, only meant to answer career-related questions."
        }
    ]);
    const [placeholder, setPlaceholder] = useState(randomPlaceholder());

    useEffect(() => {
        if (msgResponses.length > 1) {
            setChatInitiated(true);
        }
    }, [msgResponses, setChatInitiated]);

    return (
        <div style={style}>
        <Responses msgResponses={msgResponses}/>
        <div className='input-and-send' style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
        }}>
            <input 
            type="text" 
            value={message}
            placeholder={placeholder}
            onChange={(e) => setMessage(e.target.value)}
            style={{
                width: '100%',
                height: '1.5vh',
                padding: '10px 0px 10px 10px',
                borderRadius: '10px',
                border: 'none',
                outline: 'none',
                backgroundColor: '#343541',
                color: 'white',
            }} 
            onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    // e.preventDefault();
                    // e.stopPropagation();
                    // e.nativeEvent.stopImmediatePropagation();
                    getMessage(msgResponses, setMsgResponses, message);
                    setPlaceholder('...');
                    setMessage('');
                    return false;
                }
            }}
            />
            <button 
            style={{
                marginLeft: '10px',
                padding: '6px',
                borderRadius: '10px',
                border: '2px solid #005d40',
            }}
            onMouseOver={(e) => {
                e.target.style.backgroundColor = '#343541';
                e.target.style.color = 'white';
                e.target.style.border = '2px solid #005d40';
            }}
            onMouseOut={(e) => {
                e.target.style.backgroundColor = 'white';
                e.target.style.color = '#343541';
            }}
            onClick={async () => {
                getMessage(msgResponses, setMsgResponses, message);
                setPlaceholder('...');
                setMessage('');
            }}
            >
                ↑
            </button> 
        </div>
        <span style={{
            color: 'gray',
            fontSize: '0.75em',
            margin: 0,
            padding: 0,
            paddingLeft: '2px',
        }}>warning ~ this says stuff that isn't always true!</span>
        </div>

    );
}
