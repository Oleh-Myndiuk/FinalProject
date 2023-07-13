import React, { useState } from 'react';
import './ThemeSelector.scss';

function ThemeSelector({ theme, onThemeChange }) {
  const handleThemeChange = (event) => {
    onThemeChange(event.target.value);
  };

  return (
    <div className="theme-selector">
      <label>
        <input
          type="radio"
          value="light"
          checked={theme === 'light'}
          onChange={handleThemeChange}
        />
        Light
      </label>
      <label>
        <input
          type="radio"
          value="dark"
          checked={theme === 'dark'}
          onChange={handleThemeChange}
        />
        Dark
      </label>
    </div>
  );
}

export default ThemeSelector;
