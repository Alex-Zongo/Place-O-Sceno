import React from "react";
import "./GetInTouch.css";
import ContactCard from "./ContactCard";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import SendIcon from "@material-ui/icons/Send";
import PublicIcon from "@material-ui/icons/Public";
import FacebookIcon from "@material-ui/icons/Facebook";
import contact from "../images/img5.jpg";
import { Button } from "@material-ui/core";

function GetInTouch() {
	const sendEmail = () => {
		window.open("mailto:placeosceno@yahoo.fr");
	};

	return (
		<div className="getInTouch flex">
			<h2>NOUS CONTACTER</h2>
			<div className="getInTouch__info w-full">
				<div className="getInTouch__infoEmail ">
					<h6 className="text-center">
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
						description="placeosceno@yahoo.fr"
					/>
					<ContactCard
						name="WEBSITE"
						Icon={PublicIcon}
						description="www.place-o-sceno.web.app"
					/>

					<ContactCard
						name="FACEBOOK"
						Icon={FacebookIcon}
						description="Suivez-Nous sur les reseaux-socio"
						link="https://www.facebook.com/profile.php?id=100083950115567&mibextid=LQQJ4d"
					/>

					<Button onClick={sendEmail}>
						{" "}
						<SendIcon className="sendEmail__button" /> Nous Ecrire
					</Button>
				</div>

				<img src={contact} alt="" className="rounded" />
			</div>
		</div>
	);
}

export default GetInTouch;
