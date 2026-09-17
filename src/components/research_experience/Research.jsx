import React from "react";
import "./research.css";

const Research = () => {
  return (
    <section className="qualification research section" id="research">
      <h2 className="section__title">Research Experience</h2>
      <span className="section__subtitle">Papers & Publications</span>
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
                  We created a 175‐hour Bangladeshi Bangla spontaneous speech
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
                  <a
                    href="https://ieeexplore.ieee.org/document/10453554"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="research__paper-link"
                  >
                    BanSpeech: A Multi‐Domain Bangla Speech Recognition Benchmark
                    Toward Robust Performance in Challenging Conditions
                  </a>
                </h3>
                <span className="qualification__subtitle">
                  Assessed a Bangla ASR model on BanSpeech, a 7.2‐hour
                  benchmark; it struggled with spontaneous speech and high
                  out‐of‐vocabulary rates, highlighting the importance of domain
                  selection.
                </span>
                <span className="research__venue">
                  Published in <em>IEEE Access</em>, vol. 12, pp. 34527–34538, 2024
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
