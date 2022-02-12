import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <div className="row p-0">
      <div className="col-12 p-0">
        <div className="section-title">
          <div className="section-header">
            <div className="section-line-left">
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
            </div>
            <div className="section-title-text">
              <h2>{title}</h2>
            </div>

            <div className="section-line-right">
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTitle;
