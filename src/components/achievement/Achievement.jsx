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
            <p className="achievement__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi quia eum ea explicabo facere quasi unde a voluptate perspiciatis facilis, non voluptas aliquid adipisci quis ipsa architecto cupiditate laborum voluptatum?
            </p>
          </div>
          <img src={AchieveImg} alt="" className="achievement__img" />
        </div>
    </section>
  )
}

export default Achievement