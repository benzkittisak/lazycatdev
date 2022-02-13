import React from "react";

import NavMenu from '../nav-menu/nav-menu.component';


const Header = () => (
  <header className="header bg-light">
    <div className="container-fluid ">
      <div className="row">
        <div className="col-12">
         <NavMenu/>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
