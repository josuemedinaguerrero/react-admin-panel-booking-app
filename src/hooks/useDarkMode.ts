import { useContext } from "react";
import { DarkModeContext } from "../context/darkModeContext";

export const useDarkMode = () => {
   const { darkMode, dispatch } = useContext(DarkModeContext);
   return { darkMode, dispatch };
};
