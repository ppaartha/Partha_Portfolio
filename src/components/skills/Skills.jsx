import React from 'react'
import "./skills.css"
import Frontend from './Frontend'
import Backend from './Backend'
import Ml from './Ml'
import ProblemSolving from './ProblemSolving'


const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My Technical Level</span>
        <div className="skills__legend">
            <span className="skills__legend-item" data-level="advanced">Advanced</span>
            <span className="skills__legend-item" data-level="intermediate">Intermediate</span>
            <span className="skills__legend-item" data-level="basic">Basic</span>
        </div>
        <div className="skills__container container">
            <Ml/>
            <Frontend/>
            <Backend/>
            <ProblemSolving/>
        </div>

    </section>
  )
}

export default Skills