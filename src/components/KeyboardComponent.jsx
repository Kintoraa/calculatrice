import { Display } from "./DisplayComponent.jsx";
import { parseCalculatorInput } from "./CalculatorResult.jsx";
import { CalculatorProvider } from "./CalculatorContext.jsx";
import {
  checkDataWrite,
  checkDataWriteForDecimal,
  checkDataWriteForSymbol,
} from "./CheckDataWrite.jsx";
import { useContextCalculator } from "./ThemeContext.jsx";

export const CalculatorApp = () => {
  return (
    <CalculatorProvider>
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
    </CalculatorProvider>
  );
};

const KeyNumber = ({ value }) => {
  const { calculator, setCalculator } = useContextCalculator();

  const handleClick = () => {
    checkDataWrite(calculator, setCalculator, value);
  };

  return (
    <>
      <button className="button-primary" value={value} onClick={handleClick}>
        {value}
      </button>
    </>
  );
};

const KeyReset = ({ value }) => {
  const { calculator, setCalculator } = useContextCalculator();
  const handleClick = () => {
    checkDataWrite(calculator, setCalculator, value);
  };

  return (
    <button className="key-reset" value={value} onClick={handleClick}>
      {value}
    </button>
  );
};

const KeySymbol = ({ value }) => {
  const { calculator, setCalculator } = useContextCalculator();
  const handleClick = () => {
    checkDataWriteForSymbol(calculator, setCalculator, value);
  };

  return (
    <button className="button-primary" value={value} onClick={handleClick}>
      {value}
    </button>
  );
};
const KeyDecimal = ({ value }) => {
  const { calculator, setCalculator } = useContextCalculator();
  const handleClick = () => {
    checkDataWriteForDecimal(calculator, setCalculator, value);
  };

  return (
    <button className="button-primary" value={value} onClick={handleClick}>
      {value}
    </button>
  );
};

const KeyResult = ({ value }) => {
  const { calculator, setCalculator } = useContextCalculator();

  const handleClick = () => {
    const result = parseCalculatorInput(calculator);
    setCalculator(result);
  };

  return (
    <button className="key-result" value={value} onClick={handleClick}>
      {value}
    </button>
  );
};
