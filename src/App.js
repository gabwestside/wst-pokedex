import React from "react";
import List from "./Pokemon/List/List";
import View from "./Pokemon/View/View";
import AppProvider from "./AppContext/Provider";
// import AppContext from "./AppContext/Context";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { Container, Header, PokList } from "./styles.js";

import { GlobalStyle } from "./styles/global";

export default function App() {
  return (
    <Container>
      <AppProvider>
        <Router>
          <Header>
            <h1>Westside's PokemonAPI list:</h1>
          </Header>
          {/* <AppContext.Consumer>
            {({ user }) => (
              <p>
                {user && user.name} {Object.keys(user.pokedex).length} pokemons
              </p>
            )}
          </AppContext.Consumer> */}
          <PokList>
            <Switch>
              <Route path="/pokemons/list" component={List} />
              <Route path="/pokemons/:name" component={View} />
              <Route path="/" exact>
                <Redirect to="/pokemons/list" />
              </Route>
            </Switch>
            <Link to="/pokemons/list">
              <button>Voltar</button>
            </Link>
          </PokList>
        </Router>

        <GlobalStyle />
      </AppProvider>
    </Container>
  );
}
