import { createContext, useContext, useState } from "react";
import { CalculatorContext } from "./CalculatorContext.jsx";

export const ThemeContext = createContext({
  theme: "dark",
  setTheme: () => {},
});

export const useContextCalculator = () => {
  const { calculator, setCalculator } = useContext(CalculatorContext);

  return { setCalculator, calculator };
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(ThemeContext);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
