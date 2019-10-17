import React from "react";
import SearchBar from "../components/SearchBar";
import ListDisplay from "../components/ListDisplay";

class SideMenuContainer extends React.Component {
	render() {
		return (
			<div className="side-menu-container">
				{/* SideMenuContainer */}
				<SearchBar />
				<ListDisplay />
			</div>
		);
	}
}

export default SideMenuContainer;
