import { useEffect, useState } from 'react';
import { GoSun } from "react-icons/go";
import { FaRegMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md text-black bg-white border border-gray-200 hover:bg-gray-100 dark:bg-slate-900 dark:text-white dark:border-white"
    >
      {theme === 'light' ? <GoSun /> : <FaRegMoon />}
    </button>
  );
};

export default ThemeToggle;
