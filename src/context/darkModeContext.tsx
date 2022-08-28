import React, { createContext } from "react";
import { DarkModeAction } from "../types/type";

export interface DarkModeProps {
   darkMode: boolean;
   dispatch: React.Dispatch<DarkModeAction>;
}

export const DarkModeContext = createContext<DarkModeProps>(
   {} as DarkModeProps
);
