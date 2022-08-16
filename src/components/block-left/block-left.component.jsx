import React from "react";
import { useTranslation } from "react-i18next";
import {
  browserName,
  browserVersion,
  osName,
  osVersion,
} from "react-device-detect";

import MainBlock from "../../components/main-block/main-block.component";

const BlockLeft = () => {
  
  const { t } = useTranslation();

  const toggleAbout = () => {
    const aboutObject = document.querySelector('#about-me')
    aboutObject.style.display = 'block'
  }

  const toggleResume = () => {
    const aboutObject = document.querySelector('#resume')
    aboutObject.style.display = 'block'
  }

  return (
    <div className="col-lg-6">
      <div className="main-content">
        <div className="row ">
          <div className="col-12 mb-4">
            <MainBlock
              title={t("intro.title")}
              subtitle={t("intro.description")}
              image="https://cdn.discordapp.com/attachments/966965279466864664/976424138296148008/air_balloon.svg"
              justify="space-between"
              direction="row"
            />
          </div>

          <div className="col-lg-6 mb-4">
            <MainBlock
              title={t("about_me.title")}
              subtitle={t("about_me.description")}
              image="https://cdn.discordapp.com/attachments/966965279466864664/976424841903214622/read.svg"
              hover
              icon_url=""
              icon_width="100%"
              justify="space-between"
              direction="column"
              handleClick={toggleAbout}
              img_width="35%"
            />
          </div>
          <div className="col-lg-6 mb-4">
            <MainBlock
              title={t("resume.title")}
              subtitle={t("resume.description")}
              image="https://cdn.discordapp.com/attachments/966965279466864664/976425130240655360/collecting_jewelery.svg"
              justify="space-between"
              direction="column"
              hover
              icon_url=""
              icon_width="100%"
              handleClick={toggleResume}
              img_width="35%"

            />
          </div>

          <div className="col-lg-6 mb-4">
            <MainBlock
              title="BROWSER"
              subtitle={`${browserName} , Version : ${browserVersion}`}
              image="https://cdn.discordapp.com/attachments/966965279466864664/976428275813466162/landing_page_website.svg"
              icon_url=""
              icon_width="100%"
              justify="space-between"
              direction="column"
              img_width="35%"
            />
          </div>
          <div className="col-lg-6 mb-4">
            <MainBlock
              title="OS"
              subtitle={`${osName} , Version :  ${osVersion}`}
              image="https://cdn.discordapp.com/attachments/966965279466864664/976428475051286538/browser_tab_programming.svg"
              justify="space-between"
              direction="column"
              icon_url=""
              icon_width="100%"
              img_width="35%"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockLeft;
