import { DarkMode, DarkModeAction } from "../types/type";

export const darkModeReducer = (
   state: DarkMode,
   action: DarkModeAction
): DarkMode => {
   switch (action.type) {
      case "LIGHT":
         return { darkMode: false };

      case "DARK":
         return { darkMode: true };

      case "TOOGLE":
         return { darkMode: !state.darkMode };

      default:
         return state;
   }
};
