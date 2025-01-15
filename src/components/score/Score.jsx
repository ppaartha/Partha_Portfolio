import React from "react";
import ScoreChart from "./ScoreChart";
import "./score.css";

const Score = () => {
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Scores</h2>
      <span className="section__subtitle">All Scores</span>
      <div className="score__container">
        <ScoreChart />
      </div>
    </section>
  );
};

export default Score;
