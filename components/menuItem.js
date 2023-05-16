import React from "react";
import SubmenuDropdown from "./submenuDropdown";

function MenuItem({ item, depth }) {
	return item.submenu && item.submenu.length > 0 ? (
		<li className="parentMenu">
			<button id="submenuButton">
				{item.title}

				{depth > 1 ? (
					<span className="arrowRight"></span>
				) : (
					<span className="arrowDown"></span>
				)}
			</button>
			<SubmenuDropdown submenu={item.submenu} depth={depth} />
		</li>
	) : (
		<li>{item.title}</li>
	);
}

export default MenuItem;
