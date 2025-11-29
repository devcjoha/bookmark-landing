"use client";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
console.log(theme);

  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-600/20"
    >
      {theme === "light" ? <img src="bookmark-landing/icon-moon.svg" alt="icon-moon" className="w-5" /> : <img src="bookmark-landing/icon-sun.svg" alt="icon-sun" className="w-5 h-auto" />}
    </button>
  );
};