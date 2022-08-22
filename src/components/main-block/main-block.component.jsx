import React from "react";
import { useTranslation } from "react-i18next";

const MainBlock = ({
  title,
  subtitle,
  image,
  width,
  justify,
  direction,
  hover,
  icon_width,
  icon_url,
  a_link,
  handleClick,
  img_width,
  top
}) => {

  const { t } = useTranslation();

  return (
    <div
      className={`main-content-block ${hover ? 'block-hover' : ''}`}
      style={{
        width: width,
        justifyContent: justify,
        flexDirection: direction,
      }}
    >
      <div className="block-header">
        <div className="block-title">
          <h4>{title}</h4>
        </div>
        <div className="block-sub-title ">{subtitle}</div>
      </div>

      <div
        className={`block-image ${hover ? "hover" : null}`}
        style={{ width: icon_width ? icon_width : "20%" }}
      >
          <img
            src={image}
            alt=""
            style={{ position: "relative", marginTop: "20px", width: img_width ? img_width : "100%" , display:"block", }}
          />


        {hover ? (
          <div className="block-hover" style={{top: top ? '25%' : ''}}>
            {a_link ? (
              <a href={icon_url} className="block-hover-link">
                {t("button.read_more")}
              </a>
            ) : (
              <button onClick={handleClick}  to="#" className="block-hover-link">
                {t("button.read_more")}
              </button>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default MainBlock;
