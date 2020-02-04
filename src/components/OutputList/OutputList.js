import React from "react";
import Suggestion from "../Suggestion/Suggestion";
import "./OutputList.css";

const OutputList = props => {
  const noSuggestions = list => {
    if (list.length === 0) {
      return <p className="alert">No suggestions</p>;
    } else {
      return (
        <p className="alert mb-alert">
          {list.length} suggestion{list.length === 1 ? " " : "s"}
        </p>
      );
    }
  };

  return (
    <div className="outputList">
      {noSuggestions(props.suggestionsList)}
      {props.suggestionsList.map(sugName => {
        return <Suggestion key={sugName} name={sugName} />;
      })}
    </div>
  );
};

export default OutputList;
