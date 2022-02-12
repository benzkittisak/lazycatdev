import React from "react";

const Education = ({ item }) => {
  return (
    <li key={item.id} className="edu-list">
      <span className="edu-year">{item.year}</span>
      <h4 className="edu-title">{item.title}</h4>
      <p className="text-muted">{item.subtitle}</p>
    </li>
  );
};

export default Education;
