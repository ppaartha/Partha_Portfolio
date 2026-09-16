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
            I currently work at Conneqted Agents as an AI Engineer on{" "}
            <a
              href="https://www.optiify.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="about__link"
            >
              Optiify
            </a>, building LangGraph agents, MCP tools, Neo4j equipment graphs, and
            RAG over building documents. Previously I worked at REVE Systems
            (Dhaka, Bangladesh) as a Machine Learning Engineer, specializing in
            speech recognition, natural language processing, and RAG-based AI
            chatbot systems using GraphRAG, LightRAG, multimodal RAG, and
            agentic RAG, with models like Wav2Vec 2.0, Whisper, BERT, LLaMA, and
            LangChain.
          </p>
          <p className="about__description">
            My research focuses on Bangla speech recognition. I contributed to
            developing a 200-hour Bangladeshi Bangla spontaneous speech corpus
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
