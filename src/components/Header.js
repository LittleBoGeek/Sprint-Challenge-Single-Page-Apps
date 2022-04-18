import React from 'react';

export default function Header() {
  return (
    <header>
      <h1
        style={{
          fontFamily: 'Jetbrains Mono',
          fontSize: '40px',
          border: '2px solid black',
          padding: '15px 10px',
          borderRadius: '5px',
          marginTop: '30px',
        }}
      >
        {' '}
        Rick &amp; Morty Fan Page
      </h1>
    </header>
  );
}
