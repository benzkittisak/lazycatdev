import React from "react";
import Draggable from "react-draggable";
import { useTranslation } from "react-i18next";

import SectionTitle from "../../components/section-title/section-title.component";
import InfoTitle from "../../components/info-title/info-title.component";

import PortContent from "../../components/port-content/port-content.component";

const PortfolioPage = () => {

  const { t } = useTranslation();

  const PORTFOLIO_DATA = [
    {
      id: 1,
      title: t("portfolio.project1.title"),
      desc: t("portfolio.project1.description"),
      images: "https://cdn.discordapp.com/attachments/966965279466864664/976432246712070195/Screen_Shot_2565-05-18_at_17.32.58.png",
      link_url: "http://www.stv.ac.th",
      github: "",
    },
    {
        id:2,
        title: t("portfolio.project2.title"),
      desc: t("portfolio.project2.description"),
        images:"https://cdn.discordapp.com/attachments/966965279466864664/976436209314316318/Screen_Shot_2565-05-18_at_17.48.42.png",
        link_url:'https://www.thanomsri.ac.th',
        github:''
    },
    {
      id: 3,
      title: t("portfolio.project3.title"),
      desc: t("portfolio.project3.description"),
      images: "https://cdn.discordapp.com/attachments/966965279466864664/976436776002551848/Screen_Shot_2565-05-18_at_17.51.00.png",
      link_url: "http://bbgun-plant-ecom.herokuapp.com",
      github: "https://github.com/benzkittisak/plant-ecomc.git",
    },
    {
      id: 4,
      title: t("portfolio.project4.title"),
      desc: t("portfolio.project4.description"),
      images: "https://cdn.discordapp.com/attachments/966965279466864664/976437160754446376/Screen_Shot_2565-05-18_at_17.52.24.png",
      link_url: "http://bbgun-plant-ecom-2.herokuapp.com",
      github: "https://github.com/benzkittisak/bakshop-ecom.git",
    },
    {
      id: 5,
      title: t("portfolio.project5.title"),
      desc: t("portfolio.project5.description"),
      images: "https://i3.fpic.cc/file/img-b1/2022/02/12/Screen-Shot-2565-02-12-at-21.53.14.md.png",
      link_url: "https://bbgun-travel.herokuapp.com",
      github: "https://github.com/benzkittisak/tracos.git",
    },
    {
      id: 6,
      title: t("portfolio.project6.title"),
      desc: t("portfolio.project6.description"),
      images: "https://i3.fpic.cc/file/img-b1/2022/02/12/Screen-Shot-2565-02-12-at-21.59.25.md.png",
      link_url: "https://nammon-portfolio-demo.herokuapp.com",
      github: "https://github.com/benzkittisak/portfolio_test_2.git",
    },
    {
      id: 7,
      title: t("portfolio.project7.title"),
      desc: t("portfolio.project7.description"),
      images: "https://cdn.discordapp.com/attachments/966965279466864664/976438782201069598/Screen_Shot_2565-05-18_at_17.58.57.png",
      link_url: "https://bbgun-portfolio.herokuapp.com",
      github: "https://github.com/benzkittisak/lazycatdev.git",
    },
    {
      id: 8,
      title: t("portfolio.project8.title"),
      desc: t("portfolio.project8.description"),
      images: "https://i3.fpic.cc/file/img-b1/2022/02/26/Screen-Shot-2565-02-26-at-11.28.03.md.png",
      link_url: "",
      github: "https://github.com/dictionarygroup1/project.git",
    },
    // 
  ];

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
    bounds="parent"
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
          <SectionTitle title={t("portfolio.title")} />
        </div>

        <div className="portfolio-container">
          {PORTFOLIO_DATA.map((data) => (
            <PortContent key={data.id} data={data} />
          ))}

          <div className="port-content-an">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <InfoTitle title={t("portfolio.other.title")}>
                    <p className="text-muted ls-1">
                    {t("portfolio.other.description")}
                    </p>

                    <div className="btn-box">
                      <a
                        href="https://github.com/benzkittisak"
                        target="_blank"
                        className="btn-github"
                      >
                        {t("button.github")}
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
