import { createContext } from "react";

const AppContext = createContext({
  user: null,
  setToPokedex: () => {},
});

export default AppContext;
