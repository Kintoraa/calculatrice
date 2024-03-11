import { useContext } from "react";
import { ThemeContext } from "./ThemeContext.jsx";
import { ButtonTheme } from "./ButtonSlideComponent.jsx";

export const Background = ({ children }) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const storedTheme = localStorage.getItem("theme");
  const isDarkMode = () =>
    globalThis.matchMedia?.("(prefers-color-scheme:dark)").matches ?? false;

  const initialTheme = () => {
    if (storedTheme) return storedTheme;
    return isDarkMode() ? "dark" : "light";
  };

  return (
    <section className={initialTheme()}>
      <div className={"calculator"}>
        <div className={"container"}>
          <div>
            <h1>Calculatrice</h1>
          </div>
          <div>
            <ButtonTheme></ButtonTheme>
          </div>
        </div>
        {children}
      </div>
    </section>
  );
};
