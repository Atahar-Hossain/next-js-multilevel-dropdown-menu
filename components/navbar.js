import React from "react";
import navbar from "./navbar.module.css";

export default function Navbar() {
	return (
		<div className={navbar.header}>
			<ul>
				<li>Home</li>
				<li>Service</li>
				<li>Contact</li>
				<li>Technologies</li>
				<li>Hardware</li>
				<li>Software</li>
				<li>About Us</li>
			</ul>
		</div>
	);
}
