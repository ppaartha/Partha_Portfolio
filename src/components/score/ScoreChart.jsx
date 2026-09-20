import React from "react";

const ScoreChart = () => {
  const sections = [
    {
      name: "Listening",
      score: "7.5",
      max: "9.0",
      icon: "uil uil-headphones-alt",
    },
    {
      name: "Reading",
      score: "7.0",
      max: "9.0",
      icon: "uil uil-book-open",
    },
    {
      name: "Writing",
      score: "7.0",
      max: "9.0",
      icon: "uil uil-pen",
    },
    {
      name: "Speaking",
      score: "8.0",
      max: "9.0",
      icon: "uil uil-microphone",
      highlight: true,
    },
  ];

  return (
    <div className="score__content">
      {/* Overall Band Banner */}
      <div className="score__overall-card glass-card">
        <div className="score__overall-brand">
          <div className="score__overall-icon">
            <i className="uil uil-award"></i>
          </div>
          <div>
            <h3 className="score__overall-title">IELTS Academic</h3>
            <p className="score__overall-sub">International English Language Testing System</p>
          </div>
        </div>

        <div className="score__overall-score-wrap">
          <span className="score__overall-tag">Overall Band</span>
          <div className="score__overall-val">
            7.5 <span className="score__overall-max">/ 9.0</span>
          </div>
        </div>
      </div>

      {/* 4 Section Boxes */}
      <div className="score__boxes-grid">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`score__box glass-card ${section.highlight ? "score__box--highlight" : ""}`}
          >
            <div className="score__box-top">
              <div className="score__box-icon-wrap">
                <i className={`${section.icon} score__box-icon`}></i>
              </div>
              <div className="score__box-score">
                <span className="score__box-val">{section.score}</span>
                <span className="score__box-max">/ {section.max}</span>
              </div>
            </div>

            <div className="score__box-details">
              <h4 className="score__box-name">{section.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScoreChart;
