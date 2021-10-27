import styled from "styled-components";

export const Container = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center; */
  height: 100vh;

  background-color: #383a59;
  color: #fff;
  font-family: sans-serif;

  a {
    color: #fff;
  }

  input {
    /* background-color: #44475a;
    border: 1px solid #6272a4;
    border-radius: 8px;
    padding: 5px 10px;
    color: #fff; */

    padding: 0 1.5rem;
    margin: 20px 0;
    height: 3rem;
    border-radius: 0.25rem;

    border: 1px solid #6272a4;
    background: transparent;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: #ffffff;
    }

    & + input {
      margin-top: 1rem;
    }

    &:focus {
      border-color: #bd93f9;
      outline: none;
    }
  }

  button {
    background-color: #6933ff;
    border: 1px solid #6272a4;
    border-radius: 10px;
    padding: 10px 15px;
    color: #fff;
    transition: 0.3s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const PokList = styled.div`
  max-width: 500px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #6272a4;
  border-radius: 10px;
  padding: 20px;
`;

export const Header = styled.div`
  h1 {
    text-align: center;
    margin-top: 3rem;
    margin-bottom: 2rem;
  }
`;
