import React from "react";

const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <a href={item.link}>
        <img src={item.image} alt="" className="work__img" />
      </a>

      <h3 className="work__title">{item.title}</h3>
      <a href={item.link} className="work__button">
        {item.category == "company" ? "Demo" : "Github"}{" "}
        <i className="bx bx-chevrons-right solid work__button-icon"></i>
      </a>
    </div>
  );
};

export default WorkItems;
