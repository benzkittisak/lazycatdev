import React from "react";

import MainBlock from "../../components/main-block/main-block.component";

const BlockRight = () => {

  const toggleContact = () => {
    const aboutObject = document.querySelector('#contact')
    aboutObject.style.display = 'block'
  }

  return (
    <div className="col-lg-6">
      <div className="main-content">
        <div className="row">
          <div className="col-lg-6 mb-4">
            <MainBlock
              title="ทักษะ"
              subtitle="ดูได้จากผลงานที่เคยๆทำ มาเลยครับ"
              image="cheat"
              justify="space-between"
              direction="column"
              icon_url=""
              icon_width="100%"
            />
          </div>
          <div className="col-lg-6 mb-4">
            <MainBlock
              title="ติดต่อผม"
              subtitle="ช่องทางการติดต่อผมคลิกดูได้เลย"
              image="phone"
              hover
              justify="space-between"
              direction="column"
              icon_url=""
              icon_width="100%"
              handleClick={toggleContact}
            />
          </div>

          <div className="col-lg-12 mb-4">
            <MainBlock
              title="แฟ้มสะสมผลงาน"
              subtitle="ถ้าอยากดูผลงานทั้งหมดที่ผมเคยทำมาตลอดเวลาหลายปี สามารถคลิกดูได้จากตรงนี้เลยครับผม"
              image="port"
              justify="space-between"
              direction="row"
              icon_url=""
              hover
            />
          </div>

          <div className="col-lg-6 mb-4">
            <MainBlock
              title="Project"
              subtitle="ดาวน์โหลดเว็บไซต์นี้ได้บน Github เยย"
              image="github"
              hover
              a_link
              justify="space-between"
              direction="column"
              icon_url={"https://github.com/benzkittisak/lazycatdev.git"}
              icon_width="100%"
            />
          </div>

          <div className="col-lg-6 mb-4">
            <MainBlock
              title="ขอบคุณครับ"
              subtitle="ขอบคุณที่เข้ามารับชมและให้ความสนใจครับ"
              image="heart"
              justify="space-between"
              direction="column"
              icon_width="100%"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockRight;
