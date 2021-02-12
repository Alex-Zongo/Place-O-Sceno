import { Avatar } from "@material-ui/core";
import React from "react";

import "./Support.css";
function Support({ logo, name, link }) {
  return (
    <div className="support">
      {link ? (
        <a href={link} target="_blank" rel="noreferrer">
          {logo && <Avatar src={logo} className="logo" />}
          <h6> {name} </h6>
        </a>
      ) : (
        <>
          {logo && <Avatar src={logo} className="logo" />}
          <h6> {name} </h6>
        </>
      )}
    </div>
  );
}

export default Support;
