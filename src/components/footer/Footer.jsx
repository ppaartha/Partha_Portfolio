import React from "react";
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className=" footer__container container">
        <h1 className="footer__title">Partha</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <a href="https://www.facebook.com/partha.ghosh.344658/" className="footer__social-link" target="_blank">
            <i class="bx bxl-facebook"></i>
          </a>
          <a href="https://www.instagram.com/ppaartha/" className="footer__social-link" target="_blank">
            <i class="bx bxl-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/ppaartha/" className="footer__social-link" target="_blank">
            <i class="bx bxl-linkedin"></i>
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
