import React from "react";
import conneqted from "../../assets/conneqtedagents.svg";
import reve from "../../assets/reve1.png";
import codelab from "../../assets/codelab.png";
import "./services.css";

const Services = () => {
  return (
    <section className="services section" id="experience">
      <h2 className="section__title">Experience</h2>
      <span className="section__subtitle">My Technical Level</span>
      <div className="services__container container">
        <article className="services__role">
          <div className="services__role-header">
            <a href="https://conneqtedagents.ai/" target="_blank" rel="noopener noreferrer">
              <img
                src={conneqted}
                alt="Conneqted Agents"
                className="company__img company__img--dark"
              />
            </a>
            <div className="services__role-heading">
              <h3 className="services__title">
                <a
                  href="https://conneqtedagents.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="services__link"
                >
                  Conneqted Agents
                </a>
              </h3>
              <p className="services__role-title">AI Engineer</p>
              <span className="services__role-dates">Dec 2025 – Present · Remote</span>
            </div>
          </div>
          <ul className="services__list">
            <li className="services__item">
              <i className="uil uil-check-circle services__item-icon"></i>
              <p className="services__info">
                Built an in-process LangGraph agent for{" "}
                <a
                  href="https://www.optiify.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="services__link"
                >
                  Optiify
                </a>{" "}
                chat so building
                users can book after-hours access, inspect HVAC faults, and ask
                equipment questions in one conversation.
              </p>
            </li>
            <li className="services__item">
              <i className="uil uil-check-circle services__item-icon"></i>
              <p className="services__info">
                Designed tool-calling workflows (booking, FDD, work orders,
                building context) with FastAPI, DynamoDB, and InfluxDB instead
                of stuffing raw building data into the prompt.
              </p>
            </li>
            <li className="services__item">
              <i className="uil uil-check-circle services__item-icon"></i>
              <p className="services__info">
                Implemented an MCP (Model Context Protocol) agent for live
                point-condition time series: catalog lookup in DynamoDB,
                per-point Influx queries and prompt-led date windows.
              </p>
            </li>
            <li className="services__item">
              <i className="uil uil-check-circle services__item-icon"></i>
              <p className="services__info">
                Built a Neo4j knowledge graph of HVAC equipment hierarchy
                (Equipment, Location, FEEDS, HAS_LOCATION), with APOC/full-text
                tools so the agent can search and traverse plant → AHU → VAV
                without writing raw Cypher.
              </p>
            </li>
            <li className="services__item">
              <i className="uil uil-check-circle services__item-icon"></i>
              <p className="services__info">
                Added document RAG over building functional docs and onboarding
                FAQs to ground fault explanations in site-specific knowledge.
              </p>
            </li>
            <li className="services__item">
              <i className="uil uil-check-circle services__item-icon"></i>
              <p className="services__info">
                Containerized Neo4j with the API stack and auto-loaded the
                equipment graph on server startup so the agent has a ready graph
                in Docker.
              </p>
            </li>
          </ul>
        </article>

        <article className="services__role">
          <div className="services__role-header">
            <a href="https://www.revesoft.com/" target="_blank" rel="noopener noreferrer">
              <img src={reve} alt="REVE Systems" className="company__img" />
            </a>
            <div className="services__role-heading">
              <h3 className="services__title">REVE Systems</h3>
              <p className="services__role-title">Machine Learning Engineer</p>
              <span className="services__role-dates">Jan 2024 – Dec 2025</span>
            </div>
          </div>
          <ul className="services__list">
            <li className="services__item">
              <i className="uil uil-check-circle services__item-icon"></i>
              <p className="services__info">
                Built a RAG chatbot for{" "}
                <a
                  href="https://www.revechat.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="services__link"
                >
                  REVE Chat
                </a>{" "}
                using GraphRAG, LightRAG, multimodal RAG, agentic RAG, and
                LangChain, with hybrid search (BM25 + dense) for stronger
                responses.
              </p>
            </li>
            <li className="services__item">
              <i className="uil uil-check-circle services__item-icon"></i>
              <p className="services__info">
                Fine-tuned wav2vec 2.0 and Whisper for Bengali STT (
                <a
                  href="https://voice.bangla.gov.bd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="services__link"
                >
                  কথা
                </a>
                ) with PEFT-LoRA; evaluated on multiple test sets, including
                augmented data, to find model weaknesses.
              </p>
            </li>
            <li className="services__item">
              <i className="uil uil-check-circle services__item-icon"></i>
              <p className="services__info">
                Fine-tuned a VITS model for Bengali TTS (
                <a
                  href="https://read.bangla.gov.bd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="services__link"
                >
                  উচ্চারণ
                </a>
                ).
              </p>
            </li>
            <li className="services__item">
              <i className="uil uil-check-circle services__item-icon"></i>
              <p className="services__info">
                Developed a voice-based banking agent with an STT–chatbot–TTS
                pipeline to automate customer conversations.
              </p>
            </li>
            <li className="services__item">
              <i className="uil uil-check-circle services__item-icon"></i>
              <p className="services__info">
                Compressed models with quantization and ONNX for faster
                load/inference and offline use.
              </p>
            </li>
            <li className="services__item">
              <i className="uil uil-check-circle services__item-icon"></i>
              <p className="services__info">
                Implemented face liveness detection for the NTMC biometric
                authentication project using OpenCV, CNNs, and MediaPipe
                (anti-spoofing).
              </p>
            </li>
            <li className="services__item">
              <i className="uil uil-check-circle services__item-icon"></i>
              <p className="services__info">
                Built time-series forecasting pipelines for production quantity
                and sales.
              </p>
            </li>
            <li className="services__item">
              <i className="uil uil-check-circle services__item-icon"></i>
              <p className="services__info">
                Developed a chatbot with BERT and Bi-LSTM, and improved the REVE
                Chat dashboard frontend (React.js).
              </p>
            </li>
          </ul>
        </article>

        <article className="services__role">
          <div className="services__role-header">
            <a href="https://codelabfzc.com/" target="_blank" rel="noopener noreferrer">
              <img src={codelab} alt="Codelab FZC" className="company__img" />
            </a>
            <div className="services__role-heading">
              <h3 className="services__title">Codelab FZC</h3>
              <p className="services__role-title">Software Engineer</p>
              <span className="services__role-dates">Jun 2023 – Jan 2024</span>
            </div>
          </div>
          <ul className="services__list">
            <li className="services__item">
              <i className="uil uil-check-circle services__item-icon"></i>
              <p className="services__info">
                Developed a 2D object-detection game and a typing game (players
                type sentences against a time limit) in Unity for Android and
                iOS.
              </p>
            </li>
            <li className="services__item">
              <i className="uil uil-check-circle services__item-icon"></i>
              <p className="services__info">
                Contributed to an admin panel, implementing CRUD operations in
                Laravel.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
