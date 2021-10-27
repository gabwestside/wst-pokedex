import styled from "styled-components";

export const Pokemon = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.h1`
  font-weight: 300;
  font-size: 30px;
`;

export const Image = styled.img`
  width: 300px;
`;

export const PokemonAbilities = styled.ul`
  list-style: none;
  padding: 0;

  li {
    text-decoration: none;
    font-weight: bold;
    color: #bd93f9;
    border: 1px solid #bd93f9;
    display: flex;
    padding: 10px;
    border-radius: 10px;
    transition: all 200ms;
    margin-bottom: 10px;
  }
`;
