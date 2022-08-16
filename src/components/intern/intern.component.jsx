import React from "react";
import { useTranslation } from "react-i18next";

const Intern = () => {
  const { t } = useTranslation();

  const INTERN_DATA = [
    {
        id:1,
        title:t("resume.content.experiences.first.title"),
        image:[
            'https://cdn.discordapp.com/attachments/966965279466864664/966979264299823124/IMG_20180829_121300.jpg',
            'https://cdn.discordapp.com/attachments/966965279466864664/976431437505003530/IMG_20180829_121143.jpg',
        ],
        year:2019,
        desc:t("resume.content.experiences.first.description")
    }
  ]

  return (
    <div className="work-history">
      {INTERN_DATA.map((data) => (
        <div className="work-history-container" key={data.id}>
          <div className="work-histor-title">
            <span className="work-year">{data.year}</span>
            <h5>{data.title}</h5>
            <p className="desc text-muted ls-1">{data.desc}</p>
          </div>
          <div className="work-history-image">
            {data.image.map((img, index) => (
              <img key={index} src={img} alt="" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Intern;
