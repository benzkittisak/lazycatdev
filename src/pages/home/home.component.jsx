import React from "react";

import BlockLeft from "../../components/block-left/block-left.component";
import BlockRight from "../../components/block-right/block-right.component";

import Header from "../../components/header/header.component";
import SectionTitle from "../../components/section-title/section-title.component";
import AboutMe from "../about-me/about-me.component";


const HomePage = () => {
  return (
    <div className="home-page">
      <Header />

      <div className=" my-5">
        <div className="container main-screen">
          <SectionTitle title="Helloooo!!" />
          <div className="row bg-white">
            <BlockLeft />
            <BlockRight/>
          </div>
        </div>
      </div>

      <AboutMe/>
    </div>
  );
};

export default HomePage;
