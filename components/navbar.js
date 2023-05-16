import React from "react";
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
		{
			id: 7,
			title: "About",
			submenu: [
				{ id: 7.1, title: "About Us" },
				{ id: 7.2, title: "Mission" },
				{ id: 7.3, title: "Vission" },
			],
		},
	];

	return (
		<div className="header">
			<ul>
				{menu_items.map((item) => {
					return <MenuItem item={item} key={item.title} depth={1} />;
				})}
			</ul>
		</div>
	);
}
