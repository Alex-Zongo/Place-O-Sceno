import React from "react";
import "./Story.css";

import logo from "../logo.png";
import presidentImg from "../images/president.jpg";
import tchif from "../images/tchif.png";
import fitheb from "../images/fitheb.jpg";
import faceosceno from "../images/faceosceno.png";
import recreatrales from "../images/recreatrales.jpg";
import ouadada from "../images/ouadada.jpg";
import laboratorio from "../images/laboratorio.png";
import caseosceno from "../images/caseosceno.jpg";

import CardItem from "./CardItem";
import Services from "./Services";
import TheatersIcon from "@material-ui/icons/Theaters";
import CastForEducationIcon from "@material-ui/icons/CastForEducation";
import CreateIcon from "@material-ui/icons/Create";
import BuildIcon from "@material-ui/icons/Build";
import Support from "./Support";

function Story() {
  return (
    <div className="story">
      <div className="story__header">
        <h1>NOTRE HISTOIRE</h1>
        <img src={logo} alt="logo" className="story__headerLogo" />
      </div>
      <div className="story__body">
        <div className="story__description">
          <h3>Association</h3>
          <hr />
          <br />
          <p>
            <strong>Place O sceno</strong> est une organisation culturelle
            spécialisée dans les Arts de la Scène notamment la Scénographie.
            Elle regroupe une quinzaine d’artistes béninois de compétences
            diverses; Scénographes, Designer, Costumiers, Régisseurs lumière,
            son, Accessoiriste, Techniciens de scènes et Administrateurs.
            <br />
            <span>
              {" "}
              Outre les objectifs majeurs enumérés ci-dessous auxquels
              l'Association PlaceOsceno s'investit, elle a pour autres ambitions
              de conseiller les promoteurs culturels sur l'équipement de
              spectacles vivants, et les Arts visuels entre autre le Théatre, la
              Danse, la Musique, les Galeries d'expositions, etc.
            </span>
          </p>
          <br />
          <h3>Services</h3>
          <hr />
          <div className="story__services">
            <br />
            <Services
              titre="CRÉATIONS THÉÂTRALES PLURIDISCIPLINAIRES"
              Icon={TheatersIcon}
            />
            <Services
              titre="FORMATIONS DES COMÉDIENS ET COMÉDIENNES"
              Icon={CastForEducationIcon}
            />
            <Services titre="RECHERCHES SCÉNOGRAPHIQUES" Icon={BuildIcon} />
            <Services
              titre="RÉSIDENCES D'ÉCRITURES DRAMATURGIQUES EN LANGUES NATIONALES"
              Icon={CreateIcon}
            />
          </div>
        </div>
        <div className="story__president">
          <CardItem
            path="/team"
            label="Team"
            src={presidentImg}
            text="Directeur Artistique de PlaceOsceno"
            Type="div"
          />
        </div>
      </div>
      <div className="story__footer">
        <h2>Partenaires</h2>
        <hr />
        <div className="story__footerContent">
          <Support
            name="ESPACE TCHIF"
            logo={tchif}
            link="https://www.facebook.com/Espace-Tchif-260796630701531"
          />
          <Support
            name="Le FITHEB"
            logo={fitheb}
            link="https://www.facebook.com/Fithebenin"
          />
          <Support
            name="Centre Culturel Artistique et Touristique OUADADA"
            logo={ouadada}
            link="https://www.facebook.com/ouadadacentreculturel"
          />
          <Support
            name="LABORATORIO Arts contemporains (BENIN) "
            logo={laboratorio}
            link="https://www.facebook.com/Laboratorio-Arts-Contemporains-124939394285391"
          />
          <Support
            name="Les RECREATRALES de l’Association FALINGA"
            logo={recreatrales}
            link="https://www.facebook.com/recreatrales.recreatrales"
          />
          <Support
            name="Association FACE O SCENO"
            logo={faceosceno}
            link="https://www.facebook.com/faceosceno"
          />
          <Support name="CHASLIE-Théâtre" />
          <Support
            name="Atelier Nonsinan (Parakou)"
            link="https://www.facebook.com/Atelier-Nonsinan-101539131730879"
          />
          <Support name="Le Jardin des Plantes et de la Nature (JPN Porto-Novo)" />
          <Support name="AFRIDOC-BENIN" />
          <Support
            name="COMPAGNIE Théâtre EVASION"
            link="https://www.facebook.com/TheatrEvasion"
          />
          <Support name="Association KOOMBI (Burkina Faso)" />
          <Support name="THEATRE ERIC DELPHIN (Cameroun)" />
          <Support name="CRESAS (Côte d’ivoire )" />
          <Support name="Compagnie KOYKOYO (Niger)" />
          <Support
            name="CASE O SCENO (Togo)..."
            logo={caseosceno}
            link="https://www.facebook.com/Case-o-Scéno-110593287114619"
          />
        </div>
      </div>
    </div>
  );
}

export default Story;
