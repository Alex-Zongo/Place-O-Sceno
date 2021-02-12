import React from "react";
import "./GetInTouch.css";
import ContactCard from "./ContactCard";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import SendIcon from "@material-ui/icons/Send";
import PublicIcon from "@material-ui/icons/Public";
import contact from "../images/img5.jpg";
import { Button } from "@material-ui/core";

function GetInTouch() {
  const sendEmail = () => {
    window.open("mailto:alexanicetzongo@gmail.com");
  };

  return (
    <div className="getInTouch">
      <h2>NOUS CONTACTER</h2>
      <div className="getInTouch__info">
        <div className="getInTouch__infoEmail">
          <h6>
            PLACE O SCENO,
            <br />{" "}
            <span>
              Espace idéal pour vous exprimer et nourrir votre art.
            </span>{" "}
          </h6>
          <br />
          <hr />
          <br />
          <ContactCard
            name="ADRESSE"
            Icon={LocationOnIcon}
            description="ASSOCIATION PLACE O SCENO, Lycée Béhanzin, Porto Novo, BENIN"
          />
          <ContactCard
            name="PHONE"
            Icon={PhoneIcon}
            description="(+229) 94 75 25 20/ 69 25 67 92 / 01 BP: 1719 Porto Novo"
          />
          <ContactCard
            name="EMAIL"
            Icon={EmailIcon}
            description="alexanicetzongo@gmail.com"
          />
          <ContactCard
            name="WEBSITE"
            Icon={PublicIcon}
            description="www.placeosceno.web.com"
          />

          <Button onClick={sendEmail}>
            {" "}
            <SendIcon className="sendEmail__button" /> Nous Ecrire
          </Button>
        </div>

        <img src={contact} alt="" />
      </div>
    </div>
  );
}

export default GetInTouch;
