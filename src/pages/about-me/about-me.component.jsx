import React from "react";
import Draggable from "react-draggable";

import SectionTitle from "../../components/section-title/section-title.component";
import InfoTitle from "../../components/info-title/info-title.component";

import I_LINK from "../../assets/data/iLike";

const AboutMe = () => {
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
          <SectionTitle title="เกี่ยวกับฉัน" />
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
                  <h2>กิตติศักดิ์ ปานเหลือ</h2>
                </div>
              </div>

              <div className="col-12">
                <div className="about-info">
                  <p className="text-muted">
                    สวัสดีครับทุกคน ผมชื่อนายกิตติศักดิ์ ปานเหลือ
                    ชื่อเล่นเบนซ์ครับ
                    ตอนนี้กำลังศึกษาอยู่ที่มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ
                    วิทยาเขตปราจีนบุรี คณะเทคโนโลยีและการจัดการอุตสาหกรรม
                    สาขาเทคโนโลยีสารสนเทศ ชั้นปีที่ 4 แล้วครับ
                  </p>

                  <InfoTitle title="สิ่งที่ชอบ">
                    <ul>
                      {I_LINK.map((item) => (
                        <li key={item.id}>
                          <p>{item.name}</p>
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

export default AboutMe;
