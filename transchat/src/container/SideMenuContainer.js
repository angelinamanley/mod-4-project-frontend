import React from "react";
import SearchBar from "../components/SearchBar";
import ListDisplay from "../components/ListDisplay";
import API from "../adapter/API";

class SideMenuContainer extends React.Component {
	state = {
		usersList: [],
		roomsList: [],
	};

	componentDidMount() {
		API.getUsers().then(users => this.setState({ usersList: users }));

		API.getRooms(this.props.currentUserId).then(rooms =>
			this.setState({ roomsList: rooms.data }),
		);
	}

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
