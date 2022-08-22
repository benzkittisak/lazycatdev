import React from "react";
import Draggable from "react-draggable";
import { useTranslation } from 'react-i18next'

import SectionTitle from "../../components/section-title/section-title.component";
import InfoTitle from "../../components/info-title/info-title.component";
import ContactNormal from "../../components/contact-normal/contact-normal.component";
import ContactMap from "../../components/contact-map/contact-map.component";

const ContactPage = () => {

  const { t } = useTranslation();

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
    bounds="parent"
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
          <SectionTitle title={t("contact.title")} />
        </div>

        <div className="contact-container">
          <InfoTitle title={t("contact.description")}>
            <ContactNormal />
          </InfoTitle>

          <InfoTitle title={t("contact.map")}>
            <ContactMap />
          </InfoTitle>
        </div>
      </div>
    </Draggable>
  );
};

export default ContactPage;
