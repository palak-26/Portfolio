import React from 'react';
import { useDarkMode } from '../Context/DarkModeContext';
import { FiSun, FiMoon } from 'react-icons/fi';

const DarkModeToggle = () => {
  const { isDark, setIsDark } = useDarkMode();

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="text-xl p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
      title="Toggle Dark Mode"
    >
      {isDark ? <FiSun className="text-yellow-400" /> : <FiMoon className="text-gray-900" />}
    </button>
  );
};

export default DarkModeToggle;
