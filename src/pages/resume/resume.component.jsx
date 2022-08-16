import React from "react";
import Draggable from "react-draggable";
import { useTranslation } from 'react-i18next'

import SectionTitle from "../../components/section-title/section-title.component";
import InfoTitle from "../../components/info-title/info-title.component";
import Intern from "../../components/intern/intern.component";
import Education from "../../components/education/education.component";

const ResumePage = () => {
  const { t } = useTranslation();

  const EDUCATION_BACKGROUND = [
    {
        id:1,
        year:t("resume.content.education.first.year"),
        title:t("resume.content.education.first.school_name"),
        subtitle:t("resume.content.education.first.qualification")
    },
    {
        id:2,
        year:t("resume.content.education.second.year"),
        title:t("resume.content.education.second.school_name"),
        subtitle:t("resume.content.education.second.qualification")
    },
    {
        id:3,
        year:t("resume.content.education.third.year"),
        title:t("resume.content.education.third.school_name"),
        subtitle:t("resume.content.education.third.qualification")
    }
]

  const toggleResume = () => {
    const aboutObject = document.querySelector("#resume");
    aboutObject.style.display = "block";
  };

  const handleClick = () => {
    const documentObject = document.querySelector("#resume");
    documentObject.classList.remove("active");
    documentObject.style.display = "none";
  };

  return (
    <Draggable
      handle=".handle"
      position={null}
      defaultPosition={{ x: -400, y: -100 }}
      scale={1}
      onStart={toggleResume}
    >
      <div className="resume-page" id="resume">
        <div className="drag-close">
          <button onClick={handleClick}>x</button>
        </div>
        <div className="handle">
          <SectionTitle title={t("resume.title")} />
        </div>

        <div className="resume-container">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <InfoTitle title={t("resume.content.education.title")}>
                  <ul className="edu-section-container">
                    {EDUCATION_BACKGROUND.map((item) => (
                      <Education key={item.id} item={item} />
                    ))}
                  </ul>
                </InfoTitle>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12 mb-3">
                <InfoTitle title={t("resume.content.experiences.title")} />
              </div>
              <div className="col-lg-12">
                <Intern />
              </div>
              <div className="col-lg-12 text-center">
                <a href="https://drive.google.com/file/d/17P-7zTSBTKSjtM803M7oAuLUpS8Ivo17/view?usp=sharing" target="_blank" className="resume-link">
                  {t("button.download")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default ResumePage;
