import { createContext } from "react";

interface contextType {
  loggedIn: boolean;
  setLoggedIn: (value: boolean) => void;
}

export const LoginContext = createContext<contextType>({
  loggedIn: false,
  setLoggedIn: () => {},
});
