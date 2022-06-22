import React from "react";
import moment from "moment";
import "./Idea.css";

const Idea = ({ id, title, description, time, removeIdea }) => {
  const confirm = (id, title) => {
    window.confirm(`Delete ${title}?`) && removeIdea(id, title);
    return;
  };

  return (
    <li>
      <div className="idea">
        <h3>{title}</h3>
        <button onClick={() => confirm(id, title)}>&times;</button>
      </div>
      <p>{description}</p>
      <small>{moment(time).format("YYYY-MM-DD HH:mm")}</small>
    </li>
  );
};

export default Idea;
