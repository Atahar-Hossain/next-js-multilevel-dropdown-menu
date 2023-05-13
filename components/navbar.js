import React from "react";
import navbar from "./navbar.module.css";

export default function Navbar() {
	const menu_item = [
		{ title: "Home" },
		{ title: "Services" },
		{ title: "Contact" },
		{ title: "Technologies" },
		{ title: "Hardware" },
		{ title: "Software" },
		{ title: "About" },
	];
	return (
		<div className={navbar.header}>
			{
				menu_item.map
			}
		</div>
	);
}
