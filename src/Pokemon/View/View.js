import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import AppContext from "../../AppContext/Context";
import { Pokemon, Name, Image, PokemonAbilities } from "./styles";

const PokemonView = () => {
  const { setToPokedex } = useContext(AppContext);
  const [pokemon, setPokemon] = useState(null);
  const { name } = useParams();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((r) => r.json())
      .then((resultPokemon) => {
        setToPokedex(resultPokemon);
        setPokemon(resultPokemon);
      });
  }, [name, setToPokedex]);

  if (!pokemon) {
    return null;
  }

  return (
    <Pokemon>
      <Name>{pokemon.name}</Name>
      <Image src={pokemon.sprites.front_default} alt={pokemon.name} />
      <h2>Habilidades: </h2>
      <PokemonAbilities>
        {pokemon.abilities.map((item) => (
          <li>{item.ability.name}</li>
        ))}
      </PokemonAbilities>
    </Pokemon>
  );
};

export default PokemonView;
