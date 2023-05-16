// "use client";
import React from "react";
import MenuItem from "./menuItem";
// // import styles from "./Menu.module.css";
// import childMenu from "../app/globals.css";
// import childMenuStyle from "../app/globals.css";

function SubmenuDropdown({ submenu, depth, showSubmenu }) {
	return (
		<ul
			className={`${"childMenu"} ${depth > 1 ? "childMenuStyle" : ""} ${
				showSubmenu ? "showChildMenu" : "hideChildMenu"
			}`}
		>
			{submenu.map((menu) => (
				<MenuItem item={menu} key={submenu.id} depth={depth + 1} />
			))}
		</ul>
	);
}

export default SubmenuDropdown;
