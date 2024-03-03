import { useCallback } from "react";
import useThemeStorage from "./useThemeStorage";
import "./ThemeSwitcher.css";

function ThemeSwitcher() {
  const [theme, setTheme] = useThemeStorage("theme", "dark");

  const toggleClick = useCallback(() => {
    setTheme(theme === "light" ? "dark" : "light");
  }, [theme, setTheme]);

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <p>Hello World</p>
        <button onClick={toggleClick}>Change Theme</button>
      </div>
    </div>
  );
}

export default ThemeSwitcher;
