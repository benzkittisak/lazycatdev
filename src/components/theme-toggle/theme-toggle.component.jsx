import React from "react";

import { ThemeContext, themes } from "../../context";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <div className="input-group">
      <ThemeContext.Consumer>
        {({ changeTheme }) => (
          <div
            class="form-check form-switch"
            onClick={() => {
              setDarkMode(!darkMode);
              changeTheme(darkMode ? themes.light : themes.dark);
            }}
          >
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            {/* <label class="form-check-label" for="flexSwitchCheckDefault">
              Default switch checkbox input
            </label> */}
          </div>
        )}
      </ThemeContext.Consumer>
    </div>
  );
};

export default ThemeToggle;
