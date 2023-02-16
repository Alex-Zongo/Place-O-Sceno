import React from "react";
import "./ContactCard.css";
function ContactCard({ name, Icon, description, link }) {
	return (
		<div className="contactCard mr-auto ml-auto ">
			<Icon />
			<div className="description">
				<h3> {name} </h3>
				<p> {description} </p>
				{link && <a href={link}>Click Here</a>}
			</div>
		</div>
	);
}

export default ContactCard;
