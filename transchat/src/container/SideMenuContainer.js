import React from "react";
import SearchBar from "../components/SearchBar";
import ListDisplay from "../components/ListDisplay";
import AddRoom from "../components/AddRoom";
import UsersList from "../components/UsersList";

import API from "../adapter/API";

class SideMenuContainer extends React.Component {
	state = {
		usersList: [],
		roomsList: [],
		addRoomViewOn: false,
	};

	componentDidMount() {
		API.getUsers().then(users =>
			this.setState({
				usersList: users.filter(user => user.id !== this.props.currentUserId),
			}),
		);

		API.getRooms(this.props.currentUserId).then(rooms =>
			this.setState({ roomsList: rooms.data }),
		);
	}

	changeMenuView = () => {
		this.setState({ addRoomViewOn: !this.state.addRoomViewOn });
	};

	render() {
		return (
			<div className="side-menu-container">
				<AddRoom changeMenuView={this.changeMenuView} />
				<SearchBar />
				{this.state.addRoomViewOn ? (
					<UsersList usersList={this.state.usersList} />
				) : (
					<ListDisplay
						addRoomViewOn={this.addRoomViewOn}
						setSelectedSessionAndRoomIds={
							this.props.setSelectedSessionAndRoomIds
						}
						usersList={this.state.usersList}
						roomsList={this.state.roomsList}
					/>
				)}
			</div>
		);
	}
}

export default SideMenuContainer;
