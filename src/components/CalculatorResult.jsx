export const symboleMath = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
};

export const SYMBOLS = ["+", "-", "*", "/"];

const calculatorValue = {
  firstCalculator: undefined,
  symbolCalculator: undefined,
  secondCalculator: undefined,
};

export const parseCalculatorInput = (calculatorString) => {
  for (const index in calculatorString) {
    for (const symbol of SYMBOLS) {
      if (calculatorString[index] === symbol) {
        calculatorValue.firstCalculator = calculatorString
          .slice(calculatorString[index], index)
          .toString();
        calculatorValue.symbolCalculator = symbol;
        calculatorValue.secondCalculator = calculatorString
          .slice(calculatorString.indexOf(symbol) + 1)
          .toString();
      }
    }
  }
  return finalCalculator();
};

const finalCalculator = () => {
  const { firstCalculator, symbolCalculator, secondCalculator } =
    calculatorValue;
  const numberFirstCalculeted = parseFloat(firstCalculator.replace(/,/g, ""));
  const numberSecondCalculeted = parseFloat(secondCalculator.replace(/,/g, ""));
  const result = symboleMath[symbolCalculator](
    numberFirstCalculeted,
    numberSecondCalculeted,
  );

  return result ? [result] : "Error";
};
