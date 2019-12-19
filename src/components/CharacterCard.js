import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Card = styled.div`
  background: black;
  text-align: center;
  border:1px dashed blue;


`; // inline styling

const Image = styled.img`
  height: 100px;
  border-radius:100%;
`;

export default function CharacterCard(props) {
  const { name, status, species, image, id, match } = props.character;
  console.log(props);
  return (
    <Card className="character-card">
      <div>
        <Image src={image} alt="" />
      </div>

      <h2>{name}</h2>

      
        Status: {status} 
     
   <br/>
        Species: {species}
      
  
    </Card>
  ); // setting which data to display
}