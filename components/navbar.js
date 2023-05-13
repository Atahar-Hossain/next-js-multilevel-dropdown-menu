import React from "react";
import navbar from "./navbar.module.css";

export default function Navbar() {
	const menu_items = [
		{ id: 1, title: "Home" },
		{ id: 2, title: "Services" },
		{ id: 3, title: "Contact" },
		{ id: 4, title: "Technologies" },
		{ id: 5, title: "Hardware" },
		{ id: 6, title: "Software" },
		{ id: 7, title: "About" },
	];
	return (
		<div className={navbar.header}>
			<ul>
				{menu_items.map((item) => {
					return <li>{item.title}</li>;
				})}
			</ul>
		</div>
	);
}
