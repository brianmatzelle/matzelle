import React, { useEffect, useState } from 'react';
import {QdrantClient} from '@qdrant/js-client-rest';
import { finetunedModel, qdrantApiKey, qdrantEndpoint } from './docs/config';

const client = new QdrantClient({
    url: qdrantEndpoint,
    apiKey: qdrantApiKey,
});

function Responses({ msgResponses, style={} }) {
    return (
        <div>
            {msgResponses.map((msgResponse) => {
                return (
                    <div>
                        <p>{msgResponse.message}</p>
                        <p>{msgResponse.response}</p>
                    </div>
                );
            })}
        </div>
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

// type msgResponse = {
//     message: '',
//     response: '',
// }

export default function LLM({ style={} }) {
    const [message, setMessage] = useState('');
    const [msgResponses, setMsgResponses] = useState([]); // arr of type msgResponse
    const [placeholder, setPlaceholder] = useState();

    useEffect(() => {
        setPlaceholder(randomPlaceholder());
    }, []);

    return (
        <div style={style}>
        <Responses msgResponses={msgResponses} style={style}/>
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
                const response = await client.search(finetunedModel, {
                    query: message,
                    top: 5,
                });
                setMsgResponses(response.data.result);
                setPlaceholder('...');
            }}>
                ↑
            </button> 
        </div>
        </div>

    );
}
