import React from "react";

function MenuItem({ item, depth }) {
	return item.submenu && item.submenu.length > 0 ? (
		<li>
			<button id="submenuButton">
				{item.title}
				{depth > 1 ? (
					<span className="arrowRight"></span>
				) : (
					<span className="arrowDown"></span>
				)}
			</button>
		</li>
	) : (
		<li>{item.title}</li>
	);
}

export default MenuItem;
