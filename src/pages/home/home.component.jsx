import React from "react";
import { useTranslation } from "react-i18next";

import BlockLeft from "../../components/block-left/block-left.component";
import BlockRight from "../../components/block-right/block-right.component";
import SectionTitle from "../../components/section-title/section-title.component";


import AboutMe from "../about-me/about-me.component";
import ContactPage from "../contact/contact.component";
import PortfolioPage from "../portfolio/portfolio.component";
import ResumePage from "../resume/resume.component";
import Header from '../../components/header/header.component'
import Skills from "../skills/skills.component";

const HomePage = () => {

  return (
    <div className="home-page">
      <Header />

      <div className="mt-3 pt-3 pb-0">
        <div className="container main-screen">
          <SectionTitle title="Helloooo!!" />
          <div className="row bg-white">
            <BlockLeft />
            <BlockRight/>
          </div>
        </div>
      </div>

      <Skills/>
      <AboutMe/>
      <ResumePage/>
      <ContactPage/>
      <PortfolioPage/>
    </div>
  );
};

export default HomePage;
