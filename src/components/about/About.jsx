import React from "react";
import AboutImg from "../../assets/about.jpg";
// import CV from "../../assets/CV_Partha.pdf";
import Info from "./Info";
import "./about.css";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>
      <div className="about__container container grid">
        <img src={AboutImg} alt="" className="about__img" />
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
          <Info />
          
        </div>
      </div>
    </section>
  );
};

export default About;
