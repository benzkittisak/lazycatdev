import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HomeIcon } from "@heroicons/react/solid";
import { useTranslation } from "react-i18next";

import Dropdown from "react-dropdown";

import "react-dropdown/style.css";

const NavMenu = () => {
  const { t, i18n } = useTranslation();
  const [defaultLang, setDefaultLang] = useState("");
  const langOptions = ["TH" , "EN"]

  useEffect(() => {
    setDefaultLang(localStorage.getItem("i18nextLng"));
  }, [defaultLang]);

  const toggleClass = (objectID) => {
    const aboutObject = document.querySelector(objectID);
    aboutObject.style.display = "block";
  };

  const handleLanguageChange = (e) => {
    let { value } = e;
    i18n.changeLanguage(value.toLowerCase());
    setDefaultLang(value.toUpperCase());
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light p-0">
      <div className="container-fluid">
        <Link
          className="navbar-brand d-flex justify-content-center align-items-center"
          to={process.env.PUBLIC_URL + "/"}
        >
          <HomeIcon className="w-20 h-20 position-relative home-icon" />
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link
                onClick={() => toggleClass("#resume")}
                className="nav-link"
                to="#"
              >
                Resume
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={() => toggleClass("#portfolio")}
                className="nav-link"
                to="#"
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={() => toggleClass("#contact")}
                className="nav-link"
                to="#"
              >
                Contact
              </Link>
            </li>
          </ul>

          <div className="lang-change-area">
            <Dropdown
              className="lang"
              placeholder={"TH"}
              onChange={handleLanguageChange}
              value={defaultLang}
              options={langOptions}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavMenu;
