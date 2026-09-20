import React from "react";
import ScoreChart from "./ScoreChart";
import "./score.css";

const Score = () => {
  return (
    <section className="score section" id="score">
      <h2 className="section__title">Language Proficiency</h2>
      <span className="section__subtitle">IELTS Academic Official Band Score</span>
      <div className="score__container container">
        <ScoreChart />
      </div>
    </section>
  );
};

export default Score;
