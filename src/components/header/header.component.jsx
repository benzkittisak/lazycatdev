import React from "react";

import NavMenu from '../nav-menu/nav-menu.component';


const Header = () => (
  <header className="header">
    <div className="container-fluid bg-white">
      <div className="row">
        <div className="col-12">
         <NavMenu/>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
