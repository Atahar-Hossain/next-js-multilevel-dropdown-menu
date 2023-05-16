import React from "react";
import MenuItem from "./menuItem";

function SubmenuDropdown({ submenu, depth }) {
	return (
		<ul className="childMenu">
			{submenu.map((menu) => (
				<MenuItem item={menu} key={submenu.id} depth={depth + 1} />
			))}
		</ul>
	);
}

export default SubmenuDropdown;
