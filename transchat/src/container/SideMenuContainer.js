import React from "react";
import SearchBar from "../components/SearchBar";
import ListDisplay from "../components/ListDisplay";

class SideMenuContainer extends React.Component {
	state = {
		usersList: [],
		sessionsList: [],
	};

	render() {
		return (
			<div className="side-menu-container">
				<SearchBar />
				<ListDisplay />
			</div>
		);
	}
}

export default SideMenuContainer;
