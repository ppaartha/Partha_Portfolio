import React from 'react'
import AchieveImg from "../../assets/achievement.jpg"
import "./achievement.css"

const Achievement = () => {
  return (
    <section className="achievement section" id="achievement" style={{ backgroundColor: 'rgba(94, 85, 85, 0.1)' }}>
        <h2 className="section__title">Achievements</h2>
        <span className="section__subtitle">My Achievements</span>
        <div className="achievement__container container grid">
          
          <div className="achievement__data">
            <h1>1st Runner Up in AI For Bangla 2.0</h1>
            <p className="achievement__description">We presented SUBAK.KO, a large-scale 241-hour Bangladeshi Bangla speech corpus designed to advance LVCSR research with rich speaker diversity across regions, accents, and domains. The dataset demonstrates strong ASR benchmark performance, achieving 5.29% CER and 16.69% WER using a CNN CTC model. Compared to spontaneous speech datasets which show higher variability and error rates SUBAK.KO provides a stable baseline for evaluating ASR systems. This corpus will serve as a benchmark for real-time spontaneous ASR development and made publicly available for research use.
            </p>
          </div>
          <img src={AchieveImg} alt="" className="achievement__img" />
        </div>
    </section>
  )
}

export default Achievement