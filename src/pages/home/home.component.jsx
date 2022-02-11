import React from "react";

import Header from "../../components/header/header.component";
import SectionTitle from "../../components/section-title/section-title.component";

const HomePage = () => {
  return (
    <div className="home-page">
      <Header />

      <div className=" my-5">
        <div className="container main-screen">
          <SectionTitle title="Helloooo!!"/>
          <div className="row bg-white">
            <div className="col-12">
                <div className="main-content">
                    
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
