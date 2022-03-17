import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { FaMoon } from "react-icons/fa";

export default function ThemeButton() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const handleTheme = () => {
    setDarkMode(!darkMode);
  };
  return (
    <FaMoon
      className="nav-darkMode"
      style={{ color: darkMode ? "yellow" : "black" }}
      onClick={handleTheme}
    />
  );
}
