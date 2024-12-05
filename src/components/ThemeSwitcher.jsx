// src/components/ThemeSwitcher.jsx
import React, { useState, useEffect } from 'react';

const ThemeSwitcher = () => {
  // Get the current theme from localStorage or default to light
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Function to toggle theme between light and dark
  const toggleTheme = (selectedTheme) => {
    setTheme(selectedTheme);
    localStorage.setItem("theme", selectedTheme); // Store theme in localStorage
  };

  // Apply the theme to the body or main container
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="mt-6 space-y-4">
      <h2 className="text-xl font-semibold text-gray-800">Choose a Theme</h2>
      <div className="flex space-x-4">
        {/* Light Theme Button */}
        <button
          onClick={() => toggleTheme("light")}
          className="px-6 py-3 bg-white text-black rounded-md shadow-md hover:bg-gray-200"
        >
          Light Theme
        </button>
        
        {/* Dark Theme Button */}
        <button
          onClick={() => toggleTheme("dark")}
          className="px-6 py-3 bg-black text-white rounded-md shadow-md hover:bg-gray-700"
        >
          Dark Theme
        </button>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
