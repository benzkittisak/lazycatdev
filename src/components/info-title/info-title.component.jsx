import React from "react";

const InfoTitle = ({ title, children }) => {
  return (
    <div className="about-info-title">
      <h5>{title}</h5>

        {children}
    </div>
  );
};

export default InfoTitle;
