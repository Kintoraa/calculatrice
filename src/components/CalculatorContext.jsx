import { createContext, useState } from "react";

export const CalculatorContext = createContext({
  calculator: [],
  setCalculator: () => {},
});

export const CalculatorProvider = ({ children }) => {
  const [calculator, setCalculator] = useState([]);
  return (
    <CalculatorContext.Provider value={{ calculator, setCalculator }}>
      {children}
    </CalculatorContext.Provider>
  );
};
