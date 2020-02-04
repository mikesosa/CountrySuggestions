import React from "react";
import "./Suggestion.css";

const Suggestion = props => {
  return (
    <div className="suggestion">
      <p>{props.name}</p>
    </div>
  );
};

export default Suggestion;
