import React from "react";
import CONTACT_DATA from "../../assets/data/contact";

const ContactNormal = () => {
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
