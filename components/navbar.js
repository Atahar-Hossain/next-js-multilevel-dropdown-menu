import React from "react";
import navbar from "./navbar.module.css";
import MenuItem from "./menuItem";

export default function Navbar() {
	const menu_items = [
		{ id: 1, title: "Home" },
		{
			id: 2,
			title: "Services",
			submenu: [
				{ id: 2.1, title: "Web Designing" },
				{ id: 2.2, title: "Web Development" },
				{ id: 2.3, title: "Digital Marketing" },
				{ id: 2.6, title: "UI & UX Designing" },
			],
		},
		{ id: 3, title: "Contact" },
		{ id: 4, title: "Technologies" },
		{ id: 5, title: "Hardware" },
		{ id: 6, title: "Software" },
		{ id: 7, title: "About" },
		{ id: 7, title: "About" },
	];

	return (
		<div className={navbar.header}>
			<ul>
				{menu_items.map((item) => {
					return <MenuItem item={item} key={item.id} />;
				})}
			</ul>
		</div>
	);
}
