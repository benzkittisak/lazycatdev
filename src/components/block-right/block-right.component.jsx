import React from "react";

import MainBlock from "../../components/main-block/main-block.component";

const BlockRight = () => {

  const toggleContact = () => {
    const aboutObject = document.querySelector('#contact')
    aboutObject.style.display = 'block'
  }

  const togglePortfolio = () => {
    const aboutObject = document.querySelector('#portfolio')
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
              image="https://i3.fpic.cc/file/img-b1/2022/02/12/pixel-pap.md.png"
              justify="space-between"
              direction="column"
              icon_url=""
              icon_width="100%"
              img_width="35%"
            />
          </div>
          <div className="col-lg-6 mb-4">
            <MainBlock
              title="ติดต่อผม"
              subtitle="ช่องทางการติดต่อผมคลิกดูได้เลย"
              image="https://i3.fpic.cc/file/img-b1/2022/02/12/pixel-phone.md.png"
              hover
              justify="space-between"
              direction="column"
              icon_url=""
              icon_width="100%"
              handleClick={toggleContact}
              img_width="35%"

            />
          </div>

          <div className="col-lg-12 mb-4">
            <MainBlock
              title="แฟ้มสะสมผลงาน"
              subtitle="ถ้าอยากดูผลงานทั้งหมดที่ผมเคยทำมาตลอดเวลาหลายปี สามารถคลิกดูได้จากตรงนี้เลยครับผม"
              image="https://i3.fpic.cc/file/img-b1/2022/02/12/pixel-port.md.png"
              justify="space-between"
              direction="row"
              top="25%"
              icon_url=""
              hover
              handleClick={togglePortfolio}
            />
          </div>

          <div className="col-lg-6 mb-4">
            <MainBlock
              title="Project"
              subtitle="ดาวน์โหลดเว็บไซต์นี้ได้บน Github เยย"
              image="https://i3.fpic.cc/file/img-b1/2022/02/12/pixel-github.md.png"
              hover
              a_link
              justify="space-between"
              direction="column"
              icon_url={"https://github.com/benzkittisak/lazycatdev.git"}
              icon_width="100%"
              img_width="35%"
            />
          </div>

          <div className="col-lg-6 mb-4">
            <MainBlock
              title="ขอบคุณครับ"
              subtitle="ขอบคุณที่เข้ามารับชมและให้ความสนใจครับ"
              image="https://i3.fpic.cc/file/img-b1/2022/02/12/pixel-heart.md.png"
              justify="space-between"
              direction="column"
              icon_width="100%"
              img_width="35%"

            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockRight;
