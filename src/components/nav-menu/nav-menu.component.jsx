import React from "react";
import { Link } from "react-router-dom";
import { HomeIcon } from "@heroicons/react/solid";

const NavMenu = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light p-0">
    <div className="container-fluid">
      <Link
        className="navbar-brand d-flex justify-content-center align-items-center"
        to={process.env.PUBLIC_URL + "/"}
      >
        <HomeIcon className="w-20 h-20 position-relative home-icon" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="#">
              Resume
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default NavMenu;
