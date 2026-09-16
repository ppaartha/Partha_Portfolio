import React, { useEffect, useRef, useState } from "react";

import { projectData } from "./Data";
import { projectNav } from "./Data";
import WorkItems from "./WorkItems";

const Works = () => {
  const [item, setItem] = useState({ name: "company" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const scrollerRef = useRef(null);

  useEffect(() => {
    const newProjects = projectData.filter((project) => {
      return project.category.toLowerCase() === item.name;
    });
    setProjects(newProjects);
  }, [item]);

  const updateScrollState = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    setCanScrollPrev(el.scrollLeft > 8);
    setCanScrollNext(maxScroll > 8 && el.scrollLeft < maxScroll - 8);
  };

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollTo({ left: 0 });
    const frame = requestAnimationFrame(updateScrollState);
    return () => cancelAnimationFrame(frame);
  }, [projects]);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const handleWheel = (event) => {
      if (event.ctrlKey) return;

      const scale = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? window.innerHeight : 1;
      const deltaY = event.deltaY * scale;
      const deltaX = event.deltaX * scale;
      const mostlyVertical = Math.abs(deltaY) >= Math.abs(deltaX);

      if (mostlyVertical && !event.shiftKey) {
        event.preventDefault();
        window.scrollBy(0, deltaY);
        return;
      }

      if (el.scrollWidth <= el.clientWidth) return;
      if (event.shiftKey && mostlyVertical) {
        el.scrollLeft += deltaY;
        event.preventDefault();
      }
    };

    el.addEventListener("scroll", updateScrollState);
    el.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("resize", updateScrollState);

    return () => {
      el.removeEventListener("scroll", updateScrollState);
      el.removeEventListener("wheel", handleWheel);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [projects]);

  const scrollByCard = (direction) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector(".work__card");
    const amount = (card?.offsetWidth || 280) + 28;
    el.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <div>
      <div className="work__filters">
        {projectNav.map((navItem, index) => {
          return (
            <span
              onClick={(e) => {
                handleClick(e, index);
              }}
              className={`${active === index ? "active__work" : ""} work__item`}
              key={index}
            >
              {navItem.name}
            </span>
          );
        })}
      </div>
      <div className="work__scroller-wrap">
        <button
          type="button"
          className="work__scroll-btn work__scroll-btn--prev"
          onClick={() => scrollByCard(-1)}
          disabled={!canScrollPrev}
          aria-label="Scroll projects left"
        >
          <i className="bx bx-chevron-left"></i>
        </button>
        <div className="work__container" ref={scrollerRef}>
          {projects.map((project) => {
            return <WorkItems item={project} key={project.id} />;
          })}
        </div>
        <button
          type="button"
          className="work__scroll-btn work__scroll-btn--next"
          onClick={() => scrollByCard(1)}
          disabled={!canScrollNext}
          aria-label="Scroll projects right"
        >
          <i className="bx bx-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Works;
