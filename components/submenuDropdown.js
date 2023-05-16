import React from "react";
import MenuItem from "./menuItem";
// // import styles from "./Menu.module.css";
// import childMenu from "../app/globals.css";
// import childMenuStyle from "../app/globals.css";

function SubmenuDropdown({ submenu, depth }) {
	return (
		<ul className={`${"childMenu"} ${depth > 1 ? "childMenuStyle" : ""}`}>
			{submenu.map((menu) => (
				<MenuItem item={menu} key={submenu.id} depth={depth + 1} />
			))}
		</ul>
	);
}

export default SubmenuDropdown;
