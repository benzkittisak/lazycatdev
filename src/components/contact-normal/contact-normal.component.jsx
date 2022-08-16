import React from "react";
import { useTranslation } from "react-i18next";

const ContactNormal = () => {

  const { t } = useTranslation();

  const CONTACT_DATA = [
    {
        id:1,
        title:t("contact.content.phone.title"),
        data:'065-0757849'
    },
    {
        id:2,
        title:t("contact.content.email.title"),
        data:'benzkittisak2017@outlook.com'
    },
    {
        id:3,
        title:'Facebook',
        link:true,
        data:'https://www.facebook.com/benzkittisakPL/'
    },
    {
        id:4,
        title:'Line',
        data:'benzbco'
    },

]

  return (
    <ul className="contact-normal">
      {CONTACT_DATA.map((data) => (
        <li key={data.id}>
          <h5>{data.title}</h5>

          {data.link ? (
            <a href={data.data}> {data.data} </a>
          ) : (
            <p className="text-muted">{data.data}</p>
          )}
        </li>
      ))}
    </ul>
  );
};

export default ContactNormal;
