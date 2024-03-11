import { useContext } from "react";
import { ThemeContext } from "./ThemeContext.jsx";

const themeChoose = {
  dark: "dark",
  light: "light",
  purple: "purple",
};

export const ButtonTheme = () => {
  const { setTheme } = useContext(ThemeContext);

  const changeTheme = (e) => {
    localStorage.setItem("theme", e.target.value);
    setTheme(e.target.value);
  };

  return (
    <div className="wrapper">
      <div className="option">
        <input
          value={themeChoose.dark}
          name="btn"
          type="radio"
          className="input"
          onChange={changeTheme}
        />
        <div className="btn">
          <span className="span">{themeChoose.dark}</span>
        </div>
      </div>
      <div className="option">
        <input
          value={themeChoose.light}
          name="btn"
          type="radio"
          className="input"
          onChange={changeTheme}
        />
        <div className="btn">
          <span className="span">{themeChoose.light}</span>
        </div>
      </div>
      <div className="option">
        <input
          value={themeChoose.purple}
          name="btn"
          type="radio"
          className="input"
          onChange={changeTheme}
        />
        <div className="btn">
          <span className="span">{themeChoose.purple}</span>
        </div>
      </div>
    </div>
  );
};
