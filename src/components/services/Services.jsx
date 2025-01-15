import React, { useState } from "react";
import reve from "../../assets/reve1.png";
import codelab from "../../assets/codelab.png";
import "./services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="services section" id="experience">
      <h2 className="section__title">Experience</h2>
      <span className="section__subtitle">My Technical Level</span>
      <div className="services__container container grid">
        <div className="services__content">
          <div>
            {/* <i className="uil uil-web-grid services__icon"></i> */}
            <img src={reve} alt="" className="company__img"/>
            {/* <h3 className="services__title">REVE Systems</h3> */}
            <p>Machine Learning Engineer</p>
          </div>
          <span className="services__button" onClick={() => toggleTab(1)}>
            View More
            <i className="uil uil-arrow-circle-right services__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">REVE Systems</h3>
              <p className="services__modal-description">
                Machine Learning Engineer
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Fine‐tuned Wav2vec 2.0 and Whisper model for Bengali STT
                    (<a href="https://voice.bangla.gov.bd/" style={{color:"blue"}}>কথা</a>), also utilizing PEFT‐LoRA. Analyzed performance on
                    various test sets, including augmented data, and compared
                    models to identify weaknesses.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Fine‐tuned vits model for Bengali TTS (<a href="https://read.bangla.gov.bd/" style={{color:"blue"}}>উচ্চারণ</a>)
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Worked on model compression using Olive, Quantization and
                    ONNX for faster loading, inference times and also for
                    offline services
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Worked on RAG based chatbot using GraphRag, LightRag,
                    Multi‐Modal Rag, Agentic Rag and LangChain for enhanced AI
                    chatbot (<a href="https://www.revechat.com/" style={{color:"blue"}}>REVE CHAT</a>) responses.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Performed sentiment analysis and topic modeling using BERT
                    on streaming STT data
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Developed a chatbot for election commission chatbot using
                    BERT and Bi‐LSTM with better accuracy
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Implemented face liveness detection for NTMC biometric
                    authentication project using OpenCV, CNN and MediaPipe for
                    anti‐spoofing
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Developed Time Series Models and forecasting pipeline for
                    production quantity and sales amount forecasting.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services__content">
          <div>
            {/* <i className="uil uil-arrow services__icon"></i> */}
            <img src={codelab} alt="" className="company__img" />
            {/* <h3 className="services__title">Codelab FZC</h3> */}
            <p>Software Engineer</p>
          </div>
          <span className="services__button" onClick={() => toggleTab(2)}>
            View More
            <i className="uil uil-arrow-circle-right services__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">Codelab FZC</h3>
              <p className="services__modal-description">
                Software Engineer
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Developed a 2D object detection game and a typing game,
                    where players type sentences within a time limit, using
                    Unity for Android and iOS.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Contributed to developing an admin panel for a project,
                    focusing on implementing CRUD operations in Laravel.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <div className="services__content">
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
        </div> */}
      </div>
    </section>
  );
};

export default Services;
