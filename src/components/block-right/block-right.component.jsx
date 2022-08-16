import React from "react";
import { useTranslation } from "react-i18next";

import MainBlock from "../../components/main-block/main-block.component";

const BlockRight = () => {

  const { t } = useTranslation();

  const toggleContact = () => {
    const aboutObject = document.querySelector('#contact')
    aboutObject.style.display = 'block'
  }

  const togglePortfolio = () => {
    const aboutObject = document.querySelector('#portfolio')
    aboutObject.style.display = 'block'
  }

  const toggleSkills = () => {
    const aboutObject = document.querySelector('#skills')
    aboutObject.style.display = 'block'
  }

  return (
    <div className="col-lg-6">
      <div className="main-content">
        <div className="row">
          <div className="col-lg-6 mb-4">
            <MainBlock
              title={t("skill.title")}
              subtitle={t("skill.description")}
              image="https://cdn.discordapp.com/attachments/966965279466864664/976426484841480202/Icon_diploma.svg"
              justify="space-between"
              direction="column"
              icon_url=""
              hover
              handleClick={toggleSkills}
              icon_width="100%"
              img_width="35%"
            />
          </div>
          <div className="col-lg-6 mb-4">
            <MainBlock
              title={t("contact.title")}
              subtitle={t("contact.description")}
              image="https://cdn.discordapp.com/attachments/966965279466864664/976426894884995092/Icon_online_conference.svg"
              hover
              justify="space-between"
              direction="column"
              icon_url=""
              icon_width="100%"
              handleClick={toggleContact}
              img_width="35%"

            />
          </div>

          <div className="col-lg-12 mb-4">
            <MainBlock
              title={t("portfolio.title")}
              subtitle={t("portfolio.description")}
              image="https://cdn.discordapp.com/attachments/966965279466864664/976427204500140032/Icon_back_to_school.svg"
              justify="space-between"
              direction="row"
              top="25%"
              icon_url=""
              hover
              handleClick={togglePortfolio}
            />
          </div>

          <div className="col-lg-6 mb-4">
            <MainBlock
              title={t("project.title")}
              subtitle={t("project.description")}
              image="https://cdn.discordapp.com/attachments/966965279466864664/976427479533244416/Icon_test.svg"
              hover
              a_link
              justify="space-between"
              direction="column"
              icon_url={"https://github.com/benzkittisak/lazycatdev.git"}
              icon_width="100%"
              img_width="35%"
            />
          </div>

          <div className="col-lg-6 mb-4">
            <MainBlock
              title={t("thank_you.title")}
              subtitle={t("thank_you.description")}
              image="https://cdn.discordapp.com/attachments/966965279466864664/976427613100834816/playing_Rubik.svg"
              justify="space-between"
              direction="column"
              icon_width="100%"
              img_width="35%"

            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockRight;
