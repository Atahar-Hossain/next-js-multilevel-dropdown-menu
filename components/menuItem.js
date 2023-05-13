import React from "react";

function MenuItem({ item }) {
	return item.submenu && item.submenu.length > 0 ? (
		<li>{item.title}</li>
	) : (
		<li>{item.title}</li>
	);
}

export default MenuItem;