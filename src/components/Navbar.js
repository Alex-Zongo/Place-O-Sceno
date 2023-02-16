import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import "./Navbar.css";
import logo from "../logo.png";

function Navbar() {
	const [click, setClick] = useState(false);
	const [, setButton] = useState(true);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	const showButton = () => {
		if (window.innerWidth <= 960) {
			setButton(false);
		} else {
			setButton(true);
		}
	};

	useEffect(() => {
		showButton();
	}, []);

	window.addEventListener("resize", showButton);

	return (
		<>
			<nav className="navbar">
				<div className="navbar-container w-full absolute sticky">
					<div className="nav-left">
						<Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
							<h6 className="text-lg lg:text-3xl md:text-xl">PLACE O SCENO</h6>
							<img
								src={logo}
								alt=""
								className="max-h-12 lg:max-h-16 md:max-h-14"
							/>
						</Link>
					</div>
					<div className="nav-right">
						<div className="menu-icon" onClick={handleClick}>
							{click ? <CloseIcon /> : <MenuIcon />}
						</div>
						<ul className={click ? "nav-menu active" : "nav-menu"}>
							<li className="nav-item">
								<Link to="/" className="nav-links" onClick={closeMobileMenu}>
									Accueil
								</Link>
							</li>
							<li className="nav-item">
								<Link
									to="/about"
									className="nav-links"
									onClick={closeMobileMenu}
								>
									A Propos
								</Link>
							</li>
							<li className="nav-item">
								<Link
									to="/creations"
									className="nav-links"
									onClick={closeMobileMenu}
								>
									Creations & Realisations
								</Link>
							</li>
							<li className="nav-item">
								<Link
									to="/gallery"
									className="nav-links"
									onClick={closeMobileMenu}
								>
									Galerie
								</Link>
							</li>
							<li className="nav-item">
								<Link
									to="/team"
									className="nav-links"
									onClick={closeMobileMenu}
								>
									L'Equipe
								</Link>
							</li>
							<li className="nav-item">
								<Link
									to="/blog"
									className="nav-links"
									onClick={closeMobileMenu}
								>
									Blog & News
								</Link>
							</li>
							<li className="nav-item">
								<Link
									to="/contact"
									className="nav-links"
									onClick={closeMobileMenu}
								>
									Contact
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
