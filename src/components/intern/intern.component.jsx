import React from "react";

import INTERN_DATA from "../../assets/data/intern";

const Intern = () => {
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
