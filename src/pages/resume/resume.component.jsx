import React from "react";
import Draggable from "react-draggable";

import EDUCATION_BACKGROUND from "../../assets/data/education-background";
import INTERN_DATA from "../../assets/data/intern";

import SectionTitle from "../../components/section-title/section-title.component";
import InfoTitle from "../../components/info-title/info-title.component";

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
                      <li key={item.id} className="edu-list">
                        <span className="edu-year">{item.year}</span>
                        <h4 className="edu-title">{item.title}</h4>
                        <p className="text-muted">{item.subtitle}</p>
                      </li>
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
                <div className="work-history">
                  {INTERN_DATA.map((data) => (
                    <div className="work-history-container" key={data.id}>
                       
                      <div className="work-histor-title">
                      <span className="work-year">{data.year}</span>
                        <h5>{data.title}</h5>
                        <p className="desc text-muted">{data.desc}</p>
                      </div>
                      <div className="work-history-image">
                        {data.image.map((img, index) => (
                          <img key={index} src={img} alt="" />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default ResumePage;
