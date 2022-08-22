import React from "react";

import { ThemeContext, themes } from "../../context";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <div className="input-group">
      <ThemeContext.Consumer>
        {({ changeTheme }) => (
          <>
           {darkMode ? 
            <img className="icon-mode" src="https://cdn.discordapp.com/attachments/966965279466864664/1011266011380584499/moon.svg" alt="" />
           : 
           <img className="icon-mode" src="https://cdn.discordapp.com/attachments/966965279466864664/1011266011716124732/sun.svg" alt="" />
           }
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
          </>
        )}
      </ThemeContext.Consumer>
    </div>
  );
};

export default ThemeToggle;
