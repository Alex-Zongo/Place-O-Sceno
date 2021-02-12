import React from "react";
import "./Services.css";

function Services({ titre, Icon }) {
  return (
    <div className="services">
      <Icon />
      <h6> {titre} </h6>
    </div>
  );
}

export default Services;
