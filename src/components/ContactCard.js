import React from "react";
import "./ContactCard.css";
function ContactCard({ name, Icon, description }) {
  return (
    <div className="contactCard">
      <Icon />
      <div className="description">
        <h3> {name} </h3>
        <p> {description} </p>
      </div>
    </div>
  );
}

export default ContactCard;
