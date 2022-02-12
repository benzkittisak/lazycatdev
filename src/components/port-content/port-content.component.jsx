import React from 'react';

import InfoTitle from "../../components/info-title/info-title.component";
const PortContent = ({data}) => {
    return(
        <InfoTitle title={data.title} key={data.id}>
        <div className="container port-content-list">
          <div className="row">
            <div className="col-lg-6">
              <p className="text-muted">{data.desc}</p>
              <div className="port-content-link">
                {data.link_url ? (
                  <a href={data.link_url} target="_blank">
                    ชมเว็บไซต์
                  </a>
                ) : null}

                {data.github ? (
                  <a href={data.github} className="github" target="_blank">
                    GitHub
                  </a>
                ) : null}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="port-image">
                <img src={data.images} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </InfoTitle>
    )
}

export default PortContent;