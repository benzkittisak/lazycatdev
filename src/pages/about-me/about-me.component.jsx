import React from "react";
import Draggable from "react-draggable";
import { useTranslation } from "react-i18next";

import SectionTitle from "../../components/section-title/section-title.component";
import InfoTitle from "../../components/info-title/info-title.component";

const AboutMe = () => {

  const { t } = useTranslation();

  const toggleAbout = () => {
    const aboutObject = document.querySelector("#about-me");
    aboutObject.style.display = "block";
  };


  const handleClick = () => {
    const documentObject = document.querySelector("#about-me");
    documentObject.classList.remove("active");
    documentObject.style.display = "none";
  };

  return (
    <Draggable
    bounds="parent"
      handle=".handle"
      position={null}
      defaultPosition={{ x: -400, y: -100 }}
      scale={1}
      onStart={toggleAbout}
    >
      <div className="about-me" id="about-me">
        <div className="drag-close">
          <button onClick={() => handleClick()}>x</button>
        </div>
        <div className="handle">
          <SectionTitle title={t("about_me.title")} />
        </div>

        <div className="about-container">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="about-profile">
                  <img
                    src="https://cdn.discordapp.com/attachments/966965279466864664/966965331228758076/67920754_2395298607361602_186380359212990464_n.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="about-header">
                  <h2>{t("about_me.content.name")}</h2>
                </div>
              </div>

              <div className="col-12">
                <div className="about-info">
                  <p className="text-muted">
                  {t("about_me.content.aboutMe")}
                  </p>

                  <InfoTitle title={t("about_me.content.favorites.title")}>
                    <ul>
                        <li >
                          <p>{t("about_me.content.favorites.first")}</p>
                        </li>
                        <li >
                          <p>{t("about_me.content.favorites.second")}</p>
                        </li>
                        <li >
                          <p>{t("about_me.content.favorites.third")}</p>
                        </li>
                        <li >
                          <p>{t("about_me.content.favorites.fourth")}</p>
                        </li>
                        <li >
                          <p>{t("about_me.content.favorites.fifth")}</p>
                        </li>
                    </ul>
                  </InfoTitle>
                </div>
              </div>
              <div className="col-12">
                <div className="about-info">
                  <InfoTitle title={t("about_me.content.videoIntroduce")}>
                  <iframe 
                  title="Video Introduce"
                    src="https://drive.google.com/file/d/1Nfh3LMSgX8sw0H28_eayFoMBN4UxUEJx/preview" 
                    width="100%" 
                    height="300"
                    allow="autoplay">

                    </iframe>
                  </InfoTitle>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default AboutMe;
