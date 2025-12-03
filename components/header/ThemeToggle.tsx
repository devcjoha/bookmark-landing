"use client";
import Image from 'next/image';
import iconMoon from "../../public/icon-moon.svg";
import iconSun from "../../public/icon-sun.svg";
import { useTheme } from "../../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className={`w-10 h-10 p-2 flex items-center justify-center rounded-md shadow-md ${theme === "light" ? "bg-gray-50/80" : "bg-gray-50/20"} `}
    >
      {theme === "light" ? <Image src={iconMoon} alt="icon-moon" className="w-5" /> : <Image src={iconSun} alt="icon-sun" className="w-5 h-5" />}
    </button>
  );
};