import React from "react";
import "./UserInput.css";

const UserInput = props => {
  return (
    <input
      className="input"
      placeholder="Type a Country"
      onChange={props.inputChange}
    />
  );
};

export default UserInput;
