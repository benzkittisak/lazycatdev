import React from "react";
import Draggable from "react-draggable";
import { useTranslation } from "react-i18next";

import SectionTitle from "../../components/section-title/section-title.component";
import InfoTitle from "../../components/info-title/info-title.component";

const Skills = () => {
  const { t } = useTranslation();

  const content = {
    programingAndnon: [
      "HTML",
      "JavaScript",
      "TypeScript",
      "PHP",
      "C++",
      "CSS / SCSS",
      "JAVA (Android Application)",
      "PYTHON",
    ],
    framework: ["ReactJS", "Laravel", "VueJS"],
    studying:{
        title:t("skill.content"),
        lists:["GoLang", "Swift / SwiftUI", "Angular"],
    }
  };

  const toggleSkills = () => {
    const aboutObject = document.querySelector("#skills");
    aboutObject.style.display = "block";
  };

  const handleClick = () => {
    const documentObject = document.querySelector("#skills");
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
      onStart={toggleSkills}
    >
      <div className="skills" id="skills">
        <div className="drag-close">
          <button onClick={() => handleClick()}>x</button>
        </div>
        <div className="handle">
          <SectionTitle title={t("skill.title")} />
        </div>

        <div className="about-container">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="about-info">
                  <InfoTitle title="Programing and Non-Programing Languages">
                    <ul>
                      {content.programingAndnon.map((data) => (
                        <li>
                          <p key={data}>{data}</p>
                        </li>
                      ))}
                    </ul>
                  </InfoTitle>
                </div>
              </div>
              <div className="col-12">
                <div className="about-info">
                  <InfoTitle title="Frameworks and Libraries">
                    <ul>
                      {content.framework.map((data) => (
                        <li>
                          <p key={data}>{data}</p>
                        </li>
                      ))}
                    </ul>
                  </InfoTitle>
                </div>
              </div>
              <div className="col-12">
                <div className="about-info">
                  <InfoTitle title={content.studying.title}>
                    <ul>
                      {content.studying.lists.map((data) => (
                        <li>
                          <p key={data}>{data}</p>
                        </li>
                      ))}
                    </ul>
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

export default Skills;
