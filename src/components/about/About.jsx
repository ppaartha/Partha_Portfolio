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
            Recently, I have been working at REVE Systems (Dhaka, Bangladesh) as
            a Machine Learning Engineer. I specialize in developing and
            fine-tuning advanced machine learning models, particularly in speech
            recognition, natural language processing and RAG-based AI chatbot
            systems using GraphRag, LightRag, Multi Modal Rag and Agentic Rag.
            With experience working on models like Wav2Vec 2.0, Whisper, BERT,
            RAG architecture, LLaMA and LangChain.
          </p>
          <Info />
          
        </div>
      </div>
    </section>
  );
};

export default About;
