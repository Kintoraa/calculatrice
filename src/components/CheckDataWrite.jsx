import { SYMBOLS } from "./CalculatorResult.jsx";

const DECIMAL = ".";
const RESET = "RESET";
const DEL = "DEL";
const LIMITDISPLAY = 14;

export const checkDataWrite = (calculator, setCalculator, value) => {
  if (calculator.length > LIMITDISPLAY) return;
  if (value === RESET) return setCalculator([]);
  if (value === DEL) {
    const newValues = [...calculator];
    newValues.pop();
    return setCalculator(newValues);
  }

  setCalculator([...calculator, value]);
};
export const checkDataWriteForSymbol = (calculator, setCalculator, value) => {
  if (calculator.length < 1) return;
  if (calculator[calculator.length - 1] === DECIMAL) return;
  for (const symbol of SYMBOLS) {
    if (calculator.includes(symbol)) return;
  }
  setCalculator([...calculator, value]);
};

export const checkDataWriteForDecimal = (calculator, setCalculator, value) => {
  if (
    calculator.length > LIMITDISPLAY ||
    calculator.length < 1 ||
    calculator.includes(value)
  )
    return;
  for (const symbol of SYMBOLS) {
    if (calculator[calculator.length - 1] === symbol) return;
  }
  setCalculator([...calculator, value]);
};
