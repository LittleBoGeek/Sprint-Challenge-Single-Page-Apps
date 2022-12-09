import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// const Card = styled.div`
//   background: black;
//   text-align: center;
//   border:1px dashed blue;

// `;
// inline styling

// const Image = styled.img`
//   height: 100px;
//   border-radius:100%;
// `;

export default function CharacterCard(props) {
  const { name, status, species, image, id, match } = props.character;
  console.log(props);
  let color = status === 'Dead' ? 'red' : 'green';
  return (
    <div
      style={{
        border: '1.5px solid black',
        borderRadius: '5px',
        width: '200px',
        height: '300px',
        margin: 'auto',
        textAlign: 'center',
        flexBasis: '30%',
      }}
    >
      <img
        style={{
          borderRadius: '100%',
          height: '150px',
          width: '150px',
          paddingTop: '5px',
        }}
        src={image}
        alt={`Photo of ${name}`}
      />
      <h3 style={{ padding: '0 10px' }}>{name}</h3>
      <p>
        Status: <span style={{ color: `${color}` }}> {status} </span>
        <br />
        <span> Species: {species} </span>
      </p>
    </div>
  ); // setting which data to display
}
