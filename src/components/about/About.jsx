import React from "react";
// import CV from "../../assets/CV_Partha.pdf";
import Info from "./Info";
import "./about.css";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>
      <div className="about__container container grid">
        <div className="about__data">
          <p className="about__description">
            I am Partha Ghosh. I have completed my bachelor's degree in CSE from
            Shahjalal University of Science and Technology, Bangladesh.
            I currently work at ConneqtedAgents as an AI Engineer on{" "}
            <a
              href="https://www.optiify.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="about__link"
            >
              Optiify
            </a>{" "}
            (LangGraph agents, MCP tools, Neo4j equipment graphs, and RAG) and
            on{" "}
            <a
              href="https://www.quantiify.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="about__link"
            >
              Quantiify
            </a>{" "}
            (YOLOv8 + SAHI for drawing symbol count and legend detection).
            Previously I worked at REVE Systems (Dhaka, Bangladesh) as a Machine
            Learning Engineer. I built a RAG-based chatbot for{" "}
            <a
              href="https://www.revechat.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="about__link"
            >
              REVE Chat
            </a>{" "}
            using GraphRAG, LightRAG, multimodal RAG, agentic RAG, BERT, LLaMA
            and LangChain. For speech, I fine-tuned wav2vec 2.0 and Whisper on
            large Bengali datasets as STT models for{" "}
            <a
              href="https://voice.bangla.gov.bd/"
              target="_blank"
              rel="noopener noreferrer"
              className="about__link"
            >
              Kotha
            </a>{" "}
            and fine-tuned VITS across different speakers as the TTS model for{" "}
            <a
              href="https://read.bangla.gov.bd/"
              target="_blank"
              rel="noopener noreferrer"
              className="about__link"
            >
              Uccharon
            </a>
            . For{" "}
            <a
              href="https://www.lerevecraze.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="about__link"
            >
              Le Reve
            </a>
            , I developed a Temporal Fusion Transformer (TFT) pipeline to
            forecast multi-horizon sales and inventory demand based on different
            product categories, seasonal trends, and store sales reports,
            alongside a CatVTON-based virtual try-on.
          </p>
          <p className="about__description">
            My research focuses on Bangla speech recognition. I contributed to
            developing a 175-hour Bangladeshi Bangla spontaneous speech corpus
            and fine-tuning multilingual wav2vec 2.0, comparing it with the
            SUBAK.KO reading corpus to improve ASR performance. I also worked
            on{" "}
            <a
              href="https://ieeexplore.ieee.org/document/10453554"
              target="_blank"
              rel="noopener noreferrer"
              className="about__link"
            >
              BanSpeech
            </a>
            , a multi-domain Bangla speech recognition benchmark published in{" "}
            <em>IEEE Access</em> (2024), evaluating ASR robustness under
            spontaneous speech and high out-of-vocabulary conditions.
          </p>
          <Info />
        </div>
      </div>
    </section>
  );
};

export default About;
