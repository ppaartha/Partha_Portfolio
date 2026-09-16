import React, { useState, useEffect, useRef } from "react";
import "./header.css";

const Header = () => {
  const [Toggle, showMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const menuRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    
    const scrollActive = () => {
      const scrollY = window.pageYOffset;

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 200;
        const sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", scrollActive);
    
    scrollActive();

    return () => window.removeEventListener("scroll", scrollActive);
  }, []);

  useEffect(() => {
    if (!Toggle) return;

    const handlePointerDown = (event) => {
      const clickedMenu = menuRef.current?.contains(event.target);
      const clickedToggle = toggleRef.current?.contains(event.target);

      if (!clickedMenu && !clickedToggle) {
        showMenu(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [Toggle]);

  const handleLinkClick = (sectionId) => {
    setActiveSection(sectionId);
    showMenu(false);
  };

  return (
    <>
    <header className="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo" onClick={() => handleLinkClick("home")}>
          Partha
        </a>
        <div
          ref={menuRef}
          className={Toggle ? "nav__menu show-menu" : "nav__menu"}
        >
          <ul className="nav__list grid">
            <li className="nav__item">
              <a 
                href="#home" 
                className={activeSection === "home" ? "nav__link active-nav" : "nav__link"}
                onClick={() => handleLinkClick("home")}
              >
                <i className="uil uil-estate nav__icon"></i>
                Home
              </a>
            </li>
            <li className="nav__item">
              <a 
                href="#about" 
                className={activeSection === "about" ? "nav__link active-nav" : "nav__link"}
                onClick={() => handleLinkClick("about")}
              >
                <i className="uil uil-user nav__icon"></i>
                About
              </a>
            </li>
            <li className="nav__item">
              <a 
                href="#experience" 
                className={activeSection === "experience" ? "nav__link active-nav" : "nav__link"}
                onClick={() => handleLinkClick("experience")}
              >
                <i className="uil uil-briefcase-alt nav__icon"></i>
                Experience
              </a>
            </li>
            <li className="nav__item">
              <a 
                href="#skills" 
                className={activeSection === "skills" ? "nav__link active-nav" : "nav__link"}
                onClick={() => handleLinkClick("skills")}
              >
                <i className="uil uil-file-alt nav__icon"></i>
                Skills
              </a>
            </li>

            <li className="nav__item">
              <a 
                href="#education" 
                className={activeSection === "education" ? "nav__link active-nav" : "nav__link"}
                onClick={() => handleLinkClick("education")}
              >
                <i className="uil uil-briefcase-alt nav__icon"></i>
                  Qualification
              </a>
            </li>
            <li className="nav__item">
              <a 
                href="#projects" 
                className={activeSection === "projects" ? "nav__link active-nav" : "nav__link"}
                onClick={() => handleLinkClick("projects")}
              >
                <i className="uil uil-scenery nav__icon"></i>
                Projects
              </a>
            </li>
            <li className="nav__item">
              <a 
                href="#achievement" 
                className={activeSection === "achievement" ? "nav__link active-nav" : "nav__link"}
                onClick={() => handleLinkClick("achievement")}
              >
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
              <a 
                href="#contact" 
                className={activeSection === "contact" ? "nav__link active-nav" : "nav__link"}
                onClick={() => handleLinkClick("contact")}
              >
                <i className="uil uil-message nav__icon"></i>
                Contact
              </a>
            </li>
            <li className="nav__item">
              <a 
                href="#reference" 
                className={activeSection === "reference" ? "nav__link active-nav" : "nav__link"}
                onClick={() => handleLinkClick("reference")}
              >
                <i className="uil uil-message nav__icon"></i>
                Reference
              </a>
            </li>

          </ul>
          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(false)}
          ></i>
        </div>
        <div
          ref={toggleRef}
          className="nav__toggle"
          onClick={() => showMenu(!Toggle)}
          aria-expanded={Toggle}
          aria-label="Toggle menu"
        >
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>

    </>
  );
};

export default Header;
