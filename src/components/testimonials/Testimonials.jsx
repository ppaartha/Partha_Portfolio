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
      <span className="section__subtitle">Academic Reference</span>
      <Swiper
        className="testimonial__container"
        loop={Data.length > 1}
        grabCursor={Data.length > 1}
        simulateTouch={Data.length > 1}
        allowTouchMove={Data.length > 1}
        touchStartPreventDefault={false}
        noSwiping={true}
        noSwipingClass="swiper-no-swiping"
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
            <SwiperSlide className="testimonial__card swiper-no-swiping" key={id}>
              {link ? (
                <a href={link} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', color: 'inherit'}}>
                  <img src={image} alt="" className="testimonial__img" />
                </a>
              ) : (
                <img src={image} alt="" className="testimonial__img" />
              )}
              <h3 className="testimonial__name swiper-no-swiping">
                {link ? (
                  <a href={link} target="_blank" rel="noopener noreferrer" style={{color: 'inherit', textDecoration: 'none'}}>
                    {title}
                  </a>
                ) : (
                  title
                )}
              </h3>
              <div className="testimonial__description swiper-no-swiping">
                {description.split("\n").map((rawLine, index) => {
                  const line = rawLine.trim();
                  if (!line) return null;
                  if (line.toLowerCase().startsWith("email:")) {
                    const email = line.replace(/^email:\s*/i, "").trim();
                    return (
                      <p key={index} className="testimonial__description-line">
                        Email:{" "}
                        <a
                          href={`mailto:${email}`}
                          className="testimonial__email-link"
                          title={`Send email to ${email}`}
                        >
                          {email}
                        </a>
                      </p>
                    );
                  }
                  return (
                    <p key={index} className="testimonial__description-line">
                      {line}
                    </p>
                  );
                })}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
