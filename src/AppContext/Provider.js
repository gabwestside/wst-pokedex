import React, { useState, useCallback } from "react";
import AppContext from "./Context";

const defaultUser = {
  name: "Dev",
  pokedex: {},
};

const AppProvider = ({ children }) => {
  const [user, setUser] = useState(defaultUser);

  const setToPokedex = useCallback((pokemon) => {
    setUser((currentUser) => ({
      ...currentUser,
      pokedex: {
        ...currentUser.pokedex,
        [pokemon.name]: pokemon,
      },
    }));
  }, []);

  return (
    <AppContext.Provider value={{ user, setToPokedex }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
