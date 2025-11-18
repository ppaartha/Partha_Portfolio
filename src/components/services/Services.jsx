import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import reve from "../../assets/reve1.png";
import codelab from "../../assets/codelab.png";
import "./services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  // Close modal on scroll (only when scrolling outside modal)
  useEffect(() => {
    let scrollThreshold = 0;
    const SCROLL_THRESHOLD = 100; // Require more scroll before closing

    const handleWheel = (e) => {
      if (toggleState !== 0) {
        const modalContent = document.querySelector('.services__modal-content');
        const modal = document.querySelector('.services__modal.active-modal');
        
        if (modalContent && modal) {
          // Check if the wheel event target is inside the modal content
          const isInsideModalContent = modalContent.contains(e.target);
          
          if (isInsideModalContent) {
            // User is scrolling inside modal content - allow scrolling
            const isAtTop = modalContent.scrollTop === 0;
            const isAtBottom = modalContent.scrollTop + modalContent.clientHeight >= modalContent.scrollHeight - 1;
            
            // Only close if at top and scrolling up, or at bottom and scrolling down
            // Require more scroll before closing
            if ((isAtTop && e.deltaY < 0) || (isAtBottom && e.deltaY > 0)) {
              scrollThreshold += Math.abs(e.deltaY);
              if (scrollThreshold >= SCROLL_THRESHOLD) {
                setTimeout(() => {
                  setToggleState(0);
                  scrollThreshold = 0;
                }, 100);
              }
            } else {
              scrollThreshold = 0; // Reset if scrolling in opposite direction
            }
          } else {
            // User is scrolling on the overlay/background - accumulate scroll
            scrollThreshold += Math.abs(e.deltaY);
            if (scrollThreshold >= SCROLL_THRESHOLD) {
              setToggleState(0);
              scrollThreshold = 0;
            }
          }
        }
      }
    };

    const handleTouchMove = (e) => {
      if (toggleState !== 0) {
        const modalContent = document.querySelector('.services__modal-content');
        
        if (modalContent) {
          const isInsideModalContent = modalContent.contains(e.target);
          
          if (!isInsideModalContent) {
            // Scrolling on overlay - accumulate scroll
            scrollThreshold += 10;
            if (scrollThreshold >= SCROLL_THRESHOLD) {
              setToggleState(0);
              scrollThreshold = 0;
            }
          } else {
            scrollThreshold = 0; // Reset if inside modal
          }
        }
      }
    };

    if (toggleState !== 0) {
      scrollThreshold = 0; // Reset when modal opens
      // Use wheel event for mouse scrolling
      window.addEventListener("wheel", handleWheel, { passive: true });
      // Use touchmove for mobile scrolling
      window.addEventListener("touchmove", handleTouchMove, { passive: true });
      
      return () => {
        window.removeEventListener("wheel", handleWheel);
        window.removeEventListener("touchmove", handleTouchMove);
        scrollThreshold = 0;
      };
    }
  }, [toggleState]);

  return (
    <section className="services section" id="experience">
      <h2 className="section__title">Experience</h2>
      <span className="section__subtitle">My Technical Level</span>
      <div className="services__container container grid">
        <div className="services__content">
          <div>
            {/* <i className="uil uil-web-grid services__icon"></i> */}
            <a href="https://www.revesoft.com/" target="_blank" rel="noopener noreferrer">
              <img src={reve} alt="" className="company__img"/>
            </a>
            {/* <h3 className="services__title">REVE Systems</h3> */}
            <p>Machine Learning Engineer</p>
          </div>
          <span className="services__button" onClick={() => toggleTab(1)}>
            View More
            <i className="uil uil-arrow-circle-right services__button-icon"></i>
          </span>
          {toggleState === 1 && createPortal(
            <div className="services__modal active-modal">
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
                      Worked on RAG based chatbot for <a href="https://www.revechat.com/" target="_blank" rel="noopener noreferrer" style={{color:"blue"}}>REVE CHAT</a> using GraphRag, LightRag,
                      Multi‐Modal Rag, Agentic Rag and LangChain, leveraging hybrid search
                      (BM25 + dense) for enhanced AI chatbot responses.
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Fine‐tuned Wav2vec 2.0 and Whisper model for Bengali STT
                      (<a href="https://voice.bangla.gov.bd/" target="_blank" rel="noopener noreferrer" style={{color:"blue"}}>কথা</a>), also utilizing PEFT‐LoRA. Analyzed performance on
                      various test sets, including augmented data, and compared
                      models to identify weaknesses.
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Fine‐tuned vits model for Bengali TTS (<a href="https://read.bangla.gov.bd/" target="_blank" rel="noopener noreferrer" style={{color:"blue"}}>উচ্চারণ</a>)
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Developed voice‐based agent using an STT–Chatbot–TTS pipeline to
                      automate customer interactions and provide seamless conversational
                      services.
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Worked on model compression using Quantization and ONNX for faster
                      loading, inference times and also for offline services.
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Performed sentiment analysis and topic modeling using BERT
                      on streaming STT data.
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Implemented face liveness detection for NTMC biometric authentication
                      project using OpenCV, CNN and MediaPipe for anti‐spoofing.
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Developed Time Series Models and forecasting pipeline for production
                      quantity and sales amount forecasting.
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Developed a chatbot using BERT and Bi‐LSTM with better accuracy.
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Worked on the frontend of the dashboard for REVE CHAT, improving
                      usability and interface responsiveness.
                    </p>
                  </li>
                </ul>
              </div>
            </div>,
            document.body
          )}
        </div>
        <div className="services__content">
          <div>
            {/* <i className="uil uil-arrow services__icon"></i> */}
            <a href="https://codelabfzc.com/" target="_blank" rel="noopener noreferrer">
              <img src={codelab} alt="" className="company__img" />
            </a>
            {/* <h3 className="services__title">Codelab FZC</h3> */}
            <p>Software Engineer</p>
          </div>
          <span className="services__button" onClick={() => toggleTab(2)}>
            View More
            <i className="uil uil-arrow-circle-right services__button-icon"></i>
          </span>
          {toggleState === 2 && createPortal(
            <div className="services__modal active-modal">
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
            </div>,
            document.body
          )}
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
