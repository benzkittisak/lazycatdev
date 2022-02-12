import React from "react";

const ContactMap = () => {
  return (
    <div className="mapouter">
      <div className="gmap_canvas">
        <iframe
          title="Google Maps"
          width="100%"
          height="300"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=%E0%B8%AB%E0%B8%AD%E0%B8%9E%E0%B8%B1%E0%B8%81%E0%B8%8A%E0%B8%B2%E0%B8%A2%20%E0%B8%A1%E0%B8%88%E0%B8%9E&t=&z=15&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          scrolling="no"
          style={{ marginTop: "10px" }}
          marginHeight="0"
          marginWidth="0"
        />
      </div>
    </div>
  );
};

export default ContactMap;
