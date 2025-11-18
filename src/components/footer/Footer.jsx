import React, { useState, useEffect } from "react";
import "./footer.css"

const Footer = () => {
  const [activeSection, setActiveSection] = useState("home");

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
    
    // Set initial active section
    scrollActive();

    return () => window.removeEventListener("scroll", scrollActive);
  }, []);

  const handleLinkClick = (sectionId) => {
    setActiveSection(sectionId);
  };

  return (
    <footer className="footer">
      <div className=" footer__container container">
        <h1 className="footer__title">Partha</h1>
        <ul className="footer__list">
          <li>
            <a 
              href="#about" 
              className={activeSection === "about" ? "footer__link active-link" : "footer__link"}
              onClick={() => handleLinkClick("about")}
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              className={activeSection === "projects" ? "footer__link active-link" : "footer__link"}
              onClick={() => handleLinkClick("projects")}
            >
              Projects
            </a>
          </li>
          <li>
            <a 
              href="#education" 
              className={activeSection === "education" ? "footer__link active-link" : "footer__link"}
              onClick={() => handleLinkClick("education")}
            >
              Qualification
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <a href="https://www.facebook.com/partha.ghosh.344658/" className="footer__social-link" target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-facebook"></i>
          </a>
          <a href="https://www.instagram.com/ppaartha/" className="footer__social-link" target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/ppaartha/" className="footer__social-link" target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>
        <span className="footer__copy">
            &#169; All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
