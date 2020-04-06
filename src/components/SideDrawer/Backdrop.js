import React from "react";

//STYLES
import "./backdrop.css";

const Backdrop = ({ clickHandler }) => {
  return <div className="backdrop" onClick={clickHandler}></div>;
};

export default Backdrop;
