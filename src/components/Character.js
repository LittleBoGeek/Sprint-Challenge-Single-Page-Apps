import React from "react";

function Character(props) {
 
  const char = props.characters.find(
    thing => thing.id === Number(props.match.params.id)
  ); //find correct character basedon the id using match and the find method

  return <h1>{char.name}</h1>; // outputs characters name in an h1 element
}

export default Character;