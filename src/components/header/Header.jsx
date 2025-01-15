import React, { useState } from "react";
import "./header.css";

const Header = () => {
  // Toggle Menu
  const [Toggle, showMenu] = useState(false);
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Partha
        </a>
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                <i className="uil uil-estate nav__icon"></i>
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="uil uil-user nav__icon"></i>
                About
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <i className="uil uil-file-alt nav__icon"></i>
                Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#experience" className="nav__link">
                <i className="uil uil-briefcase-alt nav__icon"></i>
                Experience
              </a>
            </li>
            <li className="nav__item">
              <a href="#education" className="nav__link">
                <i className="uil uil-briefcase-alt nav__icon"></i>
                  Qualification
              </a>
            </li>
            <li className="nav__item">
              <a href="#projects" className="nav__link">
                <i className="uil uil-scenery nav__icon"></i>
                Projects
              </a>
            </li>
            <li className="nav__item">
              <a href="#achievement" className="nav__link">
                <i className="uil uil-scenery nav__icon"></i>
                Achievement
              </a>
            </li>
            {/* <li className="nav__item">
              <a href="#score" className="nav__link">
                <i className="uil uil-scenery nav__icon"></i>
                Score
              </a>
            </li> */}
            <li className="nav__item">
              <a href="#reference" className="nav__link">
                <i className="uil uil-message nav__icon"></i>
                Reference
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="uil uil-message nav__icon"></i>
                Contact
              </a>
            </li>
          </ul>
          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>
        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
