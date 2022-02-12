import React from "react";
import {
  browserName,
  browserVersion,
  osName,
  osVersion,
} from "react-device-detect";

import MainBlock from "../../components/main-block/main-block.component";

const BlockLeft = () => {

  const toggleAbout = () => {
    const aboutObject = document.querySelector('#about-me')
    aboutObject.style.display = 'block'
  }

  const toggleResume = () => {
    const aboutObject = document.querySelector('#resume')
    aboutObject.style.display = 'block'
  }

  return (
    <div className="col-lg-6">
      <div className="main-content">
        <div className="row ">
          <div className="col-12 mb-4">
            <MainBlock
              title="Helloooo !!!!"
              subtitle="สวัสดีครับทุกคน ผมชื่อเบนซ์ ตอนนี้กำลังเรียนอยู่ที่ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ วิทยาเขตปราจีนบุรี สาขา IT ชั้นปีที่ 3 เทอม 2"
              image="https://i3.fpic.cc/file/img-b1/2022/02/12/pixel-computer.md.png"
              justify="space-between"
              direction="row"
            />
          </div>

          <div className="col-lg-6 mb-4">
            <MainBlock
              title="เกี่ยวกับฉัน"
              subtitle="ทำความรู้จักผมเพิ่มเติมได้จากที่นี่เลย"
              image="https://i3.fpic.cc/file/img-b1/2022/02/12/2.md.png"
              hover
              icon_url=""
              icon_width="100%"
              justify="space-between"
              direction="column"
              handleClick={toggleAbout}
              img_width="35%"
            />
          </div>
          <div className="col-lg-6 mb-4">
            <MainBlock
              title="เรซูเม่"
              subtitle="ประวัติการศึกษาและการทำงานของผมเอง"
              image="https://i3.fpic.cc/file/img-b1/2022/02/12/3effde4a6120f6260.md.png"
              justify="space-between"
              direction="column"
              hover
              icon_url=""
              icon_width="100%"
              handleClick={toggleResume}
              img_width="35%"

            />
          </div>

          <div className="col-lg-6 mb-4">
            <MainBlock
              title="BROWSER"
              subtitle={`${browserName} , Version : ${browserVersion}`}
              image="https://i3.fpic.cc/file/img-b1/2022/02/12/4.md.png"
              icon_url=""
              icon_width="100%"
              justify="space-between"
              direction="column"
              img_width="35%"
            />
          </div>
          <div className="col-lg-6 mb-4">
            <MainBlock
              title="OS"
              subtitle={`${osName} , Version :  ${osVersion}`}
              image="https://i3.fpic.cc/file/img-b1/2022/02/12/5.md.png"
              justify="space-between"
              direction="column"
              icon_url=""
              icon_width="100%"
              img_width="35%"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockLeft;
