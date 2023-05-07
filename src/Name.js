import React from 'react';

export default function Name(props){
    return (
        <div className='name-container' style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            paddingLeft: '5vw',
            paddingTop: '2vh',
          }}>
            <h1 style={{
                color: 'white',
                fontSize: '38px',
                fontWeight: '400'
            }}>
            Brian Matzelle
            </h1>
            <p1 style={{
                color: 'white',
                fontSize: '24px',
                fontWeight: '350'
            }}>
                Hi, I'm a Computer Science senior at Binghamton University.
            </p1>
            <p2 style={{
                paddingTop: '2vh',
                color: 'white',
                fontSize: '24px',
                fontWeight: '350'
            }}>
                I have experience with full-stack web development, 
            </p2>
            <p2 style={{
                color: 'white',
                fontSize: '24px',
                fontWeight: '350'
            }}>
                mobile development (iOS and Android),
            </p2>
            <p2 style={{
                color: 'white',
                fontSize: '24px',
                fontWeight: '350'
            }}>
                and artificial intelligence.
            </p2>
            <p3 style={{
                paddingTop: '2vh',
                color: 'white',
                fontSize: '24px',
                fontWeight: '350'
            }}>
                I'm currently looking for a full-time position.
            </p3>
        </div>
    );
}