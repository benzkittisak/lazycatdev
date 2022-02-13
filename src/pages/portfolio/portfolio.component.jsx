import React from "react";
import Draggable from "react-draggable";

import SectionTitle from "../../components/section-title/section-title.component";
import InfoTitle from "../../components/info-title/info-title.component";

import PORTFOLIO_DATA from "../../assets/data/portfolio";
import PortContent from "../../components/port-content/port-content.component";

const PortfolioPage = () => {
  const togglePortfolio = () => {
    const aboutObject = document.querySelector("#portfolio");
    aboutObject.style.display = "block";
  };

  const handleClick = () => {
    const documentObject = document.querySelector("#portfolio");
    documentObject.classList.remove("active");
    documentObject.style.display = "none";
  };

  return (
    <Draggable
      handle=".handle"
      position={null}
      defaultPosition={{ x: -400, y: -250 }}
      scale={1}
      onStart={togglePortfolio}
    >
      <div className="portfolio-page" id="portfolio">
        <div className="drag-close">
          <button onClick={handleClick}>x</button>
        </div>
        <div className="handle">
          <SectionTitle title="แฟ้มสะสมผลงาน" />
        </div>

        <div className="portfolio-container">
          {PORTFOLIO_DATA.map((data) => (
            <PortContent key={data.id} data={data} />
          ))}

          <div className="port-content-an">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <InfoTitle title="อื่น ๆ">
                    <p className="text-muted ls-1">
                      ผมสามารถเขียน C++ , Javascript , Java ได้นิดหน่อย , HTML กับ CSS ถนัดมากที่สุด <br/>
                      แล้วก็ยังเคยใช้ framework และ Library อื่น ๆ อีกนอกจาก React ได้แค่ Angular , Laravel และ Vue
                    </p>
                    <p className="text-muted ls-1">
                      ถ้าหากต้องการดูงานอื่น ๆ อีกสามารถเข้าไปดูได้ใน GitHub
                      ของผมเอง จิ้มที่ปุ่มด้านล่างได้เลยครับผม
                    </p>

                    <div className="btn-box">
                      <a
                        href="https://github.com/benzkittisak"
                        target="_blank"
                        className="btn-github"
                      >
                        เข้าสู่ GitHub
                      </a>
                    </div>
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

export default PortfolioPage;
