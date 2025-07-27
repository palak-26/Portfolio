import React from 'react';
import { useDarkMode } from '../Context/DarkModeContext';
import { FiSun, FiMoon } from 'react-icons/fi';

const DarkModeToggle = () => {
  const { isDark, setIsDark } = useDarkMode();

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="text-base p-2 rounded-full bg-white/70 backdrop-blur-lg shadow-black shadow-md  hover:bg-gray-200 dark:hover:bg-gray-700 transition"
      title="Toggle Dark Mode"
    >
      <div>
        {isDark ? <FiSun className="text-yellow-400 dark:text-white " /> : <FiMoon className="text-gray-900 opacity-100" />}
      </div>
    </button>
  );
};

export default DarkModeToggle;
