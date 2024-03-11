import { createContext, useContext, useState } from "react";
import { Display } from "./DisplayComoponent.jsx";

const SYMBOLS = ["+", "-", "*", "/"];
const DECIMAL = ".";
const RESET = "RESET";
const DEL = "DEL";
const LIMITDISPLAY = 14;
export const CalculatorContext = createContext({
  calculator: [],
  setCalculator: () => {},
});

const symbolesMathematiques = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
};

export const CalculatorApp = () => {
  const [calculator, setCalculator, isToggled, setIsToggled] = useState([]);

  return (
    <CalculatorContext.Provider
      value={{ calculator, setCalculator, isToggled, setIsToggled }}
    >
      <Display></Display>
      <div className="background-key-board">
        <KeyNumber value={7} />
        <KeyNumber value={8} />
        <KeyNumber value={9} />
        <KeyReset value={"DEL"} />
        <KeyNumber value={4} />
        <KeyNumber value={5} />
        <KeyNumber value={6} />
        <KeySymbol value={"+"} />
        <KeyNumber value={1} />
        <KeyNumber value={2} />
        <KeyNumber value={3} />
        <KeySymbol value={"-"} />
        <KeyDecimal value={"."} />
        <KeyNumber value={0} />
        <KeySymbol value={"/"} />
        <KeySymbol value={"*"} />
        <KeyReset value={"RESET"} />
        <KeyResult value={"="} />
      </div>
    </CalculatorContext.Provider>
  );
};

const KeyNumber = ({ value }) => {
  const { calculator, setCalculator, isToggled } =
    useContext(CalculatorContext);

  const checkData = () => {
    if (calculator.length > LIMITDISPLAY || isToggled) return;
    setCalculator([...calculator, value]);
  };

  return (
    <>
      <button
        className="button-primary"
        value={value}
        onClick={() => checkData()}
      >
        {value}
      </button>
    </>
  );
};

const KeyReset = ({ value }) => {
  const { calculator, setCalculator } = useContext(CalculatorContext);

  const checkData = () => {
    if (value === RESET) setCalculator([]);
    if (value === DEL) {
      const newValues = [...calculator];
      newValues.pop();
      setCalculator(newValues);
    }
  };
  return (
    <button className="key-reset" value={value} onClick={() => checkData()}>
      {value}
    </button>
  );
};

const KeySymbol = ({ value }) => {
  const { calculator, setCalculator } = useContext(CalculatorContext);

  const checkData = () => {
    if (calculator.length > LIMITDISPLAY || calculator.length < 1) return;
    if (calculator[calculator.length - 1] === DECIMAL) return;
    for (const symbol of SYMBOLS) {
      if (calculator.includes(symbol)) return;
    }
    setCalculator([...calculator, value]);
  };

  return (
    <button
      className="button-primary"
      value={value}
      onClick={() => checkData()}
    >
      {value}
    </button>
  );
};
const KeyDecimal = ({ value }) => {
  const { calculator, setCalculator } = useContext(CalculatorContext);

  const checkData = () => {
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

  return (
    <button
      className="button-primary"
      value={value}
      onClick={() => checkData()}
    >
      {value}
    </button>
  );
};

const KeyResult = ({ value }) => {
  const { calculator, setCalculator, isToggled } =
    useContext(CalculatorContext);
  const calculatorValue = {
    firstCalculator: undefined,
    symbolCalculator: undefined,
    secondCalculator: undefined,
  };

  const addCalculator = () => {
    for (const index in calculator) {
      for (const symbol of SYMBOLS) {
        if (calculator[index] === symbol) {
          calculatorValue.firstCalculator = calculator
            .slice(calculator[index], index)
            .toString();
          calculatorValue.symbolCalculator = symbol;
          calculatorValue.secondCalculator = calculator
            .slice(calculator.indexOf(symbol) + 1)
            .toString();
          console.log(calculatorValue);
        }
      }
    }
    finalAddCalculator();
  };

  const finalAddCalculator = () => {
    const { firstCalculator, symbolCalculator, secondCalculator } =
      calculatorValue;
    console.log(firstCalculator);
    const numberFirstCalculeted = parseFloat(firstCalculator.replace(/,/g, ""));
    const numberSecondCalculeted = parseFloat(
      secondCalculator.replace(/,/g, ""),
    );
    const result = symbolesMathematiques[symbolCalculator](
      numberFirstCalculeted,
      numberSecondCalculeted,
    );

    setCalculator(result ? [result] : "Error");
  };

  return (
    <button
      className="key-result"
      value={value}
      onClick={() => addCalculator()}
    >
      {value}
    </button>
  );
};
