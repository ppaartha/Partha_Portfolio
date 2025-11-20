import React from "react";
import "./research.css";

const Research = () => {
  return (
    <section className="qualification section" id="education">
      <h2 className="section__title">Research Experience</h2>
      <div className="qualification__container container">
        <div className="qualification__sections">
  
          <div>
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
                  <i className="uil uil-calender" style={{ marginRight: "8px" }}></i>
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
                    target="_blank"
                    rel="noopener noreferrer"
                    className="readmore__button"
                  >
                    &nbsp;&nbsp;Read More
                    <i className="bx bx-right-arrow-alt"></i>
                  </a>
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender" style={{ marginRight: "8px" }}></i>
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

export default Research;
