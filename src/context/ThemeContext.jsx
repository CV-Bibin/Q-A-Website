// src/context/ThemeContext.js
import React, { createContext, useState, useEffect } from 'react';

// Create a Context for the theme
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Get the saved theme from localStorage or default to light
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
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
