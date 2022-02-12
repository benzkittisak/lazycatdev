import React from "react";

import { ReactComponent as ComputerIcon } from "../../assets/images/pixel-computer.svg";
import { ReactComponent as PlantIcon } from "../../assets/images/pixel-plant.svg";
import { ReactComponent as CoinIcon } from "../../assets/images/pixel-coin.svg";
import { ReactComponent as BrowserIcon } from "../../assets/images/pixel-browser.svg";
import { ReactComponent as OsIcon } from "../../assets/images/pixel-os.svg";
import { ReactComponent as CheatIcon } from "../../assets/images/pixel-cheat.svg";
import { ReactComponent as PhoneIcon } from "../../assets/images/pixel-phone.svg";
import { ReactComponent as PortIcon } from "../../assets/images/pixel-port.svg";

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
  handleClick
}) => {
  return (
    <div
      className="main-content-block"
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
        {image === "computer" ? <ComputerIcon /> : null}
        {image === "plant" ? (
          <PlantIcon
            style={{ position: "relative", marginTop: "20px", width: "35%" }}
          />
        ) : null}
        {image === "coin" ? (
          <CoinIcon
            style={{ position: "relative", marginTop: "20px", width: "35%" }}
          />
        ) : null}
        {image === "browser" ? (
          <BrowserIcon
            style={{ position: "relative", marginTop: "20px", width: "35%" }}
          />
        ) : null}
        {image === "os" ? (
          <OsIcon
            style={{ position: "relative", marginTop: "20px", width: "35%" }}
          />
        ) : null}
        {image === "cheat" ? (
          <CheatIcon
            style={{ position: "relative", marginTop: "20px", width: "35%" }}
          />
        ) : null}
        {image === "phone" ? (
          <PhoneIcon
            style={{ position: "relative", marginTop: "20px", width: "35%" }}
          />
        ) : null}
        {image === "port" ? (
          <PortIcon
            style={{ position: "relative", float: "right", marginTop: "12px" }}
          />
        ) : null}
        {image === "github" ? (
          <img
            src="https://i3.fpic.cc/file/img-b1/2022/02/12/pixel-github.md.png"
            alt=""
            style={{ position: "relative", marginTop: "20px", width: "35%" }}
          />
        ) : null}

        {image === "heart" ? (
          <img
            src="https://i3.fpic.cc/file/img-b1/2022/02/12/pixel-heart.md.png"
            alt=""
            style={{ position: "relative", marginTop: "20px", width: "35%" }}
          />
        ) : null}

        {hover ? (
          <div className="block-hover" style={{top: image=== 'port' ? '25%' : ''}}>
            {a_link ? (
              <a href={icon_url} className="block-hover-link">
                ข้อมูลเพิ่มเติม
              </a>
            ) : (
              <button onClick={handleClick}  to="#" className="block-hover-link">
                ข้อมูลเพิ่มเติม
              </button>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default MainBlock;
