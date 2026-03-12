import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches),
  );

  const [wave, setWave] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setWave(true);

    setTimeout(() => {
      setDarkMode(!darkMode);
    }, 200);

    setTimeout(() => {
      setWave(false);
    }, 800);
  };

  return (
    <>
      {/* WAVE ANIMATION */}
      {wave && (
        <span
          className={`fixed inset-0 z-[9999] pointer-events-none flex items-center justify-center`}
        >
          <span
            className={`absolute w-[200vw] h-[200vw] rounded-full animate-wave
            ${darkMode ? "bg-white" : "bg-black"}`}
          />
        </span>
      )}

      {/* BUTTON */}
      <button
        onClick={toggleTheme}
        className="relative w-14 h-7 flex items-center bg-gray-300 dark:bg-gray-700 rounded-full p-1 transition"
      >
        <span
          className={`w-5 h-5 bg-white text-black rounded-full shadow-md transform transition duration-300 flex items-center justify-center
          ${darkMode ? "translate-x-7" : "translate-x-0"}`}
        >
          {darkMode ? <Moon size={14} /> : <Sun size={14} />}
        </span>
      </button>
    </>
  );
}
