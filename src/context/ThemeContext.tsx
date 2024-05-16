import { createContext, useReducer } from "react";

type ThemeContextType = {
  mode: string;
  changeMode: (mode: string) => void;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

const themeReducer = (
  state: { mode: string },
  action: { type: string; payload: string }
) => {
  switch (action.type) {
    case "CHANGE_MODE":
      return { ...state, mode: action.payload };
    default:
      return state;
  }
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(themeReducer, {
    mode: "light",
  });

  const changeMode = (mode: string) => {
    dispatch({ type: "CHANGE_MODE", payload: mode });
  };

  return (
    <ThemeContext.Provider value={{ ...state, changeMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
