import React from "react";
import { Link } from "react-router-dom";
import { HomeIcon } from "@heroicons/react/solid";

const NavMenu = () => {
  const toggleClass = (objectID) => {
    const aboutObject = document.querySelector(objectID);
    aboutObject.style.display = "block";
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-0">
      <div className="container-fluid">
        <Link
          className="navbar-brand d-flex justify-content-center align-items-center"
          to={process.env.PUBLIC_URL + "/"}
        >
          <HomeIcon className="w-20 h-20 position-relative home-icon" />
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
        

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
        </div>
      </div>
    </nav>
  );
};

export default NavMenu;
