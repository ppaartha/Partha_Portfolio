import React from "react";

const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className={`work__media${item.category === "company" ? " work__media--contain" : ""}`}
      >
        <img src={item.image} alt={item.title} className="work__img" />
      </a>

      <h3 className="work__title">{item.title}</h3>
      <p className="work__description">{item.description}</p>   {/* NEW LINE */}

      <a href={item.link} target="_blank" rel="noopener noreferrer" className="work__button">
        {item.category === "company" ? "Demo" : "Github"}{" "}
        <i className="bx bx-chevrons-right solid work__button-icon"></i>
      </a>
    </div>
  );
};

export default WorkItems;
