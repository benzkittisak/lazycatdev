import React from "react";
import Draggable from "react-draggable";

import SectionTitle from "../../components/section-title/section-title.component";
import InfoTitle from "../../components/info-title/info-title.component";

import PORTFOLIO_DATA from "../../assets/data/portfolio";

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
            <InfoTitle title={data.title} key={data.id}>
              <div className="container port-content-list">
                <div className="row">
                  <div className="col-lg-6">
                    <p className="text-muted">{data.desc}</p>
                    <div className="port-content-link">
                      {data.link_url ? (
                        <a href={data.link_url} target="_blank">
                          ชมเว็บไซต์
                        </a>
                      ) : null}

                      {data.github ? (
                        <a href={data.github} class="github" target="_blank">
                          GitHub
                        </a>
                      ) : null}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="port-image">
                      <img src={data.images} alt="" className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
            </InfoTitle>
          ))}

          <div className="port-content-an">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <InfoTitle title="อื่น ๆ">
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
