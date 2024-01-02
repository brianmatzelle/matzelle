import React, { useState } from 'react';
import {QdrantClient} from '@qdrant/js-client-rest';
import { finetunedModel, qdrantEndpoint } from './docs/config';
import OpenAI from "openai";

const client = new QdrantClient({
    url: qdrantEndpoint,
    apiKey: process.env.REACT_APP_QDRANT_API_KEY,
});


const openai = new OpenAI({
    dangerouslyAllowBrowser: true,
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});

function UserMessage({ message }) {
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
                backgroundColor: '#005d40',
                borderRadius: '10px',
                padding: '10px',
                marginRight: '10px',
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
                marginLeft: '10px',
                color: 'white',
            }}>
                {message}
            </div>
        </div>
    );
}
    
function Responses({ msgResponses }) {
    return (
        <>
        {msgResponses.length > 0 &&
        <div>
            {console.log(msgResponses)}
            {msgResponses.map((msgResponse, i) => {
                return (
                    <div key={i}>
                        {/* {msgResponse.role === 'user' && <UserMessage message={msgResponse.content} />}
                        {msgResponse.role === 'assistant' && <BotMessage message={msgResponse.content} />} */}
                        { msgResponse.role === 'user' ? 
                        <UserMessage message={msgResponse.content} /> 
                        : 
                        (msgResponse.role === 'assistant' ? <BotMessage message={msgResponse.content}/> : <></> ) }
                    </div>
                );
            })}
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
        'What do you value most in life?',
        'What are you currently up to?',
        'Are you working on any projects currently?',
    ];
    const randIdx = Math.floor(Math.random() * placeholders.length);
    return placeholders[randIdx];
}

const getMessage = async (msgResponses, setMsgResponses, message) => {
    setMsgResponses(prevMsgResponses => prevMsgResponses.concat({ "role": 'user', "content": message }));
    const completion = await openai.chat.completions.create({
        messages: msgResponses.concat({ "role": 'user', "content": message }),
        model: finetunedModel,
    });
    console.log(completion);
    const msgResponse = { "role": 'assistant', "content": completion.choices[0].message.content };
    setMsgResponses(prevMsgResponses => prevMsgResponses.concat(msgResponse));
}

export default function LLM({ style={} }) {
    const [message, setMessage] = useState('');
    const [msgResponses, setMsgResponses] = useState([
        {
            "role": "system", "content": "You are an extension of Brian, only meant to answer career-related questions."
        }
    ]);
    const [placeholder, setPlaceholder] = useState(randomPlaceholder());

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
                fontSize: '12px',
                padding: '10px 0px 10px 10px',
                borderRadius: '10px',
                border: 'none',
                marginBottom: '20px',
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
        </div>

    );
}
