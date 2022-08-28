import { useReducer } from "react";
import { DarkMode, ChildrenProps } from "../types/type";
import { DarkModeContext } from "./darkModeContext";
import { darkModeReducer } from "./darkModeReducer";

const INITIAL_STATE: DarkMode = {
   darkMode: false,
};

export const DarkModeContextProvider = ({ children }: ChildrenProps) => {
   const [state, dispatch] = useReducer(darkModeReducer, INITIAL_STATE);

   return (
      <DarkModeContext.Provider value={{ darkMode: state.darkMode, dispatch }}>
         {children}
      </DarkModeContext.Provider>
   );
};
