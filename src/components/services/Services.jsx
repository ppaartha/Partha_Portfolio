import React, { useState } from "react";
import "./services.css";

const Services = () => {

  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  }

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Experience</h2>
      <span className="section__subtitle">My Technical Level</span>
      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">hello1</h3>
          </div>
          <span className="services__button" onClick={()=>toggleTab(1)}>
            View More<i className="uil uil-arrow-circle-right services__button-icon"></i>
          </span>
          <div className={toggleState === 1 ? "services__modal active-modal":"services__modal"}>
            <div className="services__modal-content">
              <i onClick={()=>toggleTab(0)} className="uil uil-times services__modal-close"></i>
              <h3 className="services__modal-title">hello1</h3>
              <p className="services__modal-description">dssssss ssss sssssssss sss sajfhdsa; fhhhh hhhhha; ; lkasdfkl sldkfsd sdf sd f sdfsd f</p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">sddd ddddd ddgf asdf</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">sddddd ddd ddgfa sdf</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">sdddd dddd ddgfasdf</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">sddddddddddgfasdf</p>
                </li>
              </ul>
            </div>

          </div>
        </div>
        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">hello2</h3>
          </div>
          <span className="services__button" onClick={()=>toggleTab(2)}>
            View More<i className="uil uil-arrow-circle-right services__button-icon"></i>
          </span>
          <div className={toggleState === 2 ? "services__modal active-modal":"services__modal"}>
            <div className="services__modal-content">
              <i onClick={()=>toggleTab(0)} className="uil uil-times services__modal-close"></i>
              <h3 className="services__modal-title">hello2</h3>
              <p className="services__modal-description">dssssss ssss sssssssss sss sajfhdsa; fhhhh hhhhha; ; lkasdfkl sldkfsd sdf sd f sdfsd f</p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">sddddddddddgfasdf</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">sddddddddddgfasdf</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">sddddddddddgfasdf</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">sddddddddddgfasdf</p>
                </li>
              </ul>
            </div>

          </div>
        </div>
        <div className="services__content">
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">hello3</h3>
          </div>
          <span className="services__button" onClick={()=>toggleTab(3)}>
            View More<i className="uil uil-arrow-circle-right services__button-icon"></i>
          </span>
          <div className={toggleState === 3 ? "services__modal active-modal":"services__modal"}>
            <div className="services__modal-content">
              <i onClick={()=>toggleTab(0)} className="uil uil-times services__modal-close"></i>
              <h3 className="services__modal-title">hello3</h3>
              <p className="services__modal-description">dssssss ssss sssssssss sss sajfhdsa; fhhhh hhhhha; ; lkasdfkl sldkfsd sdf sd f sdfsd f</p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">sdd ddd dddd gf asdf sdf df </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">sdddd ddddd dgfa sdf</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">sddddddddddgfasdf</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">sddddddddddgfasdf</p>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
