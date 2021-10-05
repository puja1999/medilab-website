import React, { useState } from "react";
import serviceapi from "../API/ServiceApi";

const Services = () => {
  const [serviceData, setServiceData] = useState(serviceapi);
  return (
    <>
      <div className="service-main-container">
        <div className="container-fluid service-container">
          <p className="service-head text-left">
            OUR SERVICE
          </p>
          <hr/>
          <div className="row service-row">
            <div className="col-lg-4">
              <p className="service-des">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                at maiores quis, laborum, harum modi placeat nihil non magnam
                numquam necessitatibus iure, pariatur sit omnis dolore! Beatae
                quidem incidunt dolores.
              </p>
            </div>
            <div className="col-lg-8">
              <div className="row">
                {serviceData.map((item) => {
                    console.log(item);
                    const { id, logo, title, info } = item;
                  return (
                    <>
                      <div className="col-lg-6 service-box" key={id}>
                        <i className={`fontawesome-style ${logo}`}></i>
                        <h3 className="sub-head">{title}</h3>
                        <p className="main-hero-para">
                         {info}
                        </p>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
