import React from "react";
import "./testimonial.css";
import { Data } from "./Data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Testimonials = () => {
  return (
    <section className="testimonial section container" id="reference">
      <h2 className="section__title">Reference</h2>
      <span className="section__subtitle"></span>
      <Swiper
        className="testimonial__container"
        loop={Data.length > 1}
        grabCursor={true}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: Data.length === 1 ? 1 : 2,
          },
          768: {
            slidesPerView: Data.length === 1 ? 1 : 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
        centeredSlides={Data.length === 1}
      >
        {Data.map(({ id, image, title, description, link }) => {
          return (
            <SwiperSlide className="testimonial__card" key={id}>
              {link ? (
                <a href={link} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', color: 'inherit'}}>
                  <img src={image} alt="" className="testimonial__img" />
                </a>
              ) : (
                <img src={image} alt="" className="testimonial__img" />
              )}
              <h3 className="testimonial__name">
                {link ? (
                  <a href={link} target="_blank" rel="noopener noreferrer" style={{color: 'inherit', textDecoration: 'none'}}>
                    {title}
                  </a>
                ) : (
                  title
                )}
              </h3>
              <p className="testimonial__description">
                {description.split("\n").map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
