"use client";
import React, { useEffect, useRef, useState } from "react";
import SubmenuDropdown from "./submenuDropdown";

function MenuItem({ item, depth }) {
	const [showSubmenu, setShowSubmenu] = useState(false);

	function handleSubMenu() {
		setShowSubmenu((prev) => !prev);
		// console.log("clicked");
	}

	return item.submenu && item.submenu.length > 0 ? (
		<li className="parentMenu">
			<button id="submenuButton" onClick={handleSubMenu}>
				{item.title}

				{depth > 1 ? (
					<span className="arrowRight"></span>
				) : (
					<span className="arrowDown"></span>
				)}
			</button>
			<SubmenuDropdown
				submenu={item.submenu}
				depth={depth}
				showSubmenu={showSubmenu}
			/>
		</li>
	) : (
		<li>{item.title}</li>
	);
}

export default MenuItem;
