import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "./Button";
import "./HeroSection.css";
import video from "../videos/vid1.mp4";

function HeroSection() {
  const history = useHistory();
  return (
    <div className="hero-container">
      <video src={video} autoPlay loop muted />
      <h1>BIENVENUE A PLACEOSCENO</h1>
      <p>La scène au centre de l'art et de la création</p>
      <div className="hero-btns">
        <Button
          className="btn"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          onClick={() => history.push("/about")}
        >
          PLUS D'INFOS
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
