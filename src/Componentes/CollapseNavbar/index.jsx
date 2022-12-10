import React  from "react";
import { FaTimes } from "react-icons/fa";
import {HiBars3} from 'react-icons/hi2';
import './index.css'
function Index() {
	const navRef = React.useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			<h3>JOSE ISMAEL</h3>
			<nav ref={navRef}>
				<a href="/#">About</a>
				<a href="/#">Projects</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<HiBars3 />
			</button>
		</header>
	);
}

export default Index;