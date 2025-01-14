import React, { useState } from "react";
import sust from "../../assets/sust.png";
import gregory from "../../assets/gregory.jpeg";
import joseph from "../../assets/joseph.png";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
    console.log(toggleState);
  };
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My educations</span>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification-icon">
              Education
            </i>
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-credit-card-search qualification-icon"></i>
            Research Experience
          </div>
        </div>
        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div className="qualification__item">
                <img src={sust} alt="" className="institute__img" />
                <div>
                  <h2 className="qualification__title">
                    Shahjalal University of Science and Technology
                  </h2>
                  <span className="qualification__subtitle">
                    BSc in Computer Science and Engineering
                  </span>
                  <br />
                  <span className="qualification__subtitle">CGPA: 3.35</span>
                  <div className="qualification__calender">
                    <i className="uil uil-calender"></i>
                    2018-2023
                  </div>
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div className="qualification__item">
                <img src={joseph} alt="" className="institute__img" />
                <div>
                  <h2 className="qualification__title">
                    St. Joseph Higher Secondary School
                  </h2>
                  <span className="qualification__subtitle">
                    Higher Secondary Certificate (HSC)
                  </span>
                  <br />
                  <span className="qualification__subtitle">GPA: 5.00</span>
                  <div className="qualification__calender">
                    <i className="uil uil-calender"></i>
                    2015-2017
                  </div>
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div className="qualification__item">
                <img src={gregory} alt="" className="institute__img" />
                <div>
                  <h2 className="qualification__title">
                    St. Gregory's High School and College
                  </h2>
                  <span className="qualification__subtitle">
                    Secondary School Certificate (SSC)
                  </span>
                  <br />
                  <span className="qualification__subtitle">GPA: 5.00</span>
                  <div className="qualification__calender">
                    <i className="uil uil-calender"></i>
                    2005-2015
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <span className="qualification__rounder"></span>
              </div>
              <div className="qualification__research-item">
                <h3 className="qualification__title">
                  Development of a Large Corpus of Spontaneous Speech for
                  Improved Speech Recognition in Bangladeshi Bangla
                </h3>
                <span className="qualification__subtitle">
                  We created a 200‐hour Bangladeshi Bangla spontaneous speech
                  corpus and fine‐tuned the multilingual wav2vec 2.0 model,
                  comparing it with a reading corpus (SUBAK.KO) to enhance ASR
                  performance.
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender"></i>
                  2023-2024
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <span className="qualification__rounder"></span>
              </div>
              <div className="qualification__research-item">
                <h3 className="qualification__title">
                  BanSpeech: A Multi‐Domain Bangla Speech Recognition Benchmark
                  Toward Robust Performance in Challenging Conditions
                </h3>
                <span className="qualification__subtitle">
                  Assessed a Bangla ASR model on BanSpeech, a 7.2‐hour
                  benchmark; it struggled with spontaneous speech and high
                  out‐of‐vocabulary rates, highlighting the importance of domain
                  selection.
                  <a
                    href="https://ieeexplore.ieee.org/document/10453554"
                    className="readmore__button"
                  >
                    &nbsp;&nbsp;Read More
                    <i className="bx bx-right-arrow-alt"></i>
                  </a>
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender"></i>
                  2023-2024
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
