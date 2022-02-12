import React from "react";
import Draggable from "react-draggable";

import SectionTitle from "../../components/section-title/section-title.component";
import InfoTitle from "../../components/info-title/info-title.component";
import ContactNormal from "../../components/contact-normal/contact-normal.component";
import ContactMap from "../../components/contact-map/contact-map.component";

const ContactPage = () => {
  const toggleContact = () => {
    const aboutObject = document.querySelector("#contact");
    aboutObject.style.display = "block";
  };

  const handleClick = () => {
    const documentObject = document.querySelector("#contact");
    documentObject.classList.remove("active");
    documentObject.style.display = "none";
  };

  return (
    <Draggable
      handle=".handle"
      position={null}
      defaultPosition={{ x: -300, y: -300 }}
      scale={1}
      onStart={toggleContact}
    >
      <div className="contact-page" id="contact">
        <div className="drag-close">
          <button onClick={() => handleClick()}>x</button>
        </div>
        <div className="handle">
          <SectionTitle title="ติดต่อ" />
        </div>

        <div className="contact-container">
          <InfoTitle title="ช่องทางการติดต่อ">
            <ContactNormal />
          </InfoTitle>

          <InfoTitle title="แผนที่">
            <ContactMap/>
          </InfoTitle>
        </div>
      </div>
    </Draggable>
  );
};

export default ContactPage;
