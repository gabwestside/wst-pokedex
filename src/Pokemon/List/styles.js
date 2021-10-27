import styled from "styled-components";

export const Input = styled.input`
  color: #fff;
`;

export const PokeList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: auto;
  flex-direction: row;

  li {
    margin-bottom: 10px;
    max-width: 200px;
  }

  li a {
    text-decoration: none;
    font-weight: bold;
    color: #bd93f9;
    border: 1px solid #bd93f9;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-radius: 10px;
    transition: all 200ms;

    &:hover {
      background-color: #bd93f9;
      color: #383a59;
    }
  }

  label {
    font-size: 10px;
    padding: 3px 8px;
    background-color: #50fa7a;
    color: #000000;
    border-radius: 4px;
  }
`;
