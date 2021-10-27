import React from "react";
import { Link } from "react-router-dom";

const PokemonCard = ({ name }) => {
  if (name.startsWith("bul")) {
    console.log("render");
  }
  return (
    <li key={name}>
      <Link to={`/pokemons/${name}`}>{name}</Link>
    </li>
  );
};

export default React.memo(PokemonCard);
