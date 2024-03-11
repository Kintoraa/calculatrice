import { useContextCalculator } from "./ThemeContext.jsx";

export const Display = () => {
  const { calculator } = useContextCalculator();

  return (
    <div>
      <div className={"background-display"}>
        <p>{calculator}</p>
      </div>
    </div>
  );
};
