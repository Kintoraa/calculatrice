import { useContext } from "react";
import { CalculatorContext } from "./KeyboardComponent.jsx";

export const Display = () => {
  const { calculator } = useContext(CalculatorContext);

  return (
    <div>
      <div className={"background-display"}>
        <p>{calculator}</p>
      </div>
    </div>
  );
};
