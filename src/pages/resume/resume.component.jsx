import React from "react";
import Draggable from "react-draggable";

import EDUCATION_BACKGROUND from "../../assets/data/education-background";

import SectionTitle from "../../components/section-title/section-title.component";
import InfoTitle from "../../components/info-title/info-title.component";
import Intern from "../../components/intern/intern.component";
import Education from "../../components/education/education.component";

const ResumePage = () => {
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
          <SectionTitle title="เรซูเม่" />
        </div>

        <div className="resume-container">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <InfoTitle title="ประวัติการศึกษา">
                  <ul className="edu-section-container">
                    {EDUCATION_BACKGROUND.map((item) => (
                      <Education item={item}/>
                    ))}
                  </ul>
                </InfoTitle>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12 mb-3">
                <InfoTitle title="ประวัติการเข้าฝึกงาน" />
              </div>
              <div className="col-lg-12">
                <Intern/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default ResumePage;
