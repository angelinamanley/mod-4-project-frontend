import React from "react";
import SearchBar from "../components/SearchBar";
import ListDisplay from "../components/ListDisplay";
import AddRoom from "../components/AddRoom";

import API from "../adapter/API";

class SideMenuContainer extends React.Component {
	state = {
		usersList: [],
		roomsList: [],
		addRoomViewOn: true,
	};

	componentDidMount() {
		API.getUsers()
			.then(users =>
				this.setState({
					usersList: users.filter(user => user.id !== this.props.currentUserId),
				}),
			)
			.then(
				API.getRooms(this.props.currentUserId).then(rooms =>
					this.setState({
						roomsList: this.cleanAllRoomsData(rooms.data),
					}),
				),
			);
	}

	componentDidUpdate(prevProps) {
		if (
			this.props.currentUserId !== prevProps.currentUserId ||
			this.props.time !== prevProps.time
		) {
			API.getUsers()
				.then(users =>
					this.setState({
						usersList: users.filter(
							user => user.id !== this.props.currentUserId,
						),
					}),
				)
				.then(
					API.getRooms(this.props.currentUserId).then(rooms =>
						this.setState({
							roomsList: this.cleanAllRoomsData(rooms.data),
						}),
					),
				);
		}
	}

	cleanAllRoomsData = roomsArray =>
		roomsArray.map(room => this.cleanRoomData(room));

	cleanRoomData = room => {
		let cleanRoom = {};

		cleanRoom.id = parseInt(room.id);
		cleanRoom.mySessionId = room.attributes.sessions.find(
			session => session.user_id === this.props.currentUserId,
		).id;
		cleanRoom.friendUserId = room.attributes.sessions.find(
			session => session.user_id !== this.props.currentUserId,
		).user_id;
		cleanRoom.friendSessionId = room.attributes.sessions.find(
			session => session.user_id !== this.props.currentUserId,
		).id;
		let userId = cleanRoom.friendUserId;
		cleanRoom.username = this.state.usersList.find(
			user => user.id === userId,
		).username;

		return cleanRoom;
	};

	changeMenuView = () => {
		this.setState({ addRoomViewOn: !this.state.addRoomViewOn });
	};

	getRoomFriendSession = room =>
		room.attributes.sessions.find(
			session => session.user_id !== this.props.currentUserId,
		);

	getRoomFriendUserId = room => this.getRoomFriendSession(room).user_id;

	getAllUsersWithOpenRoom = () =>
		this.state.roomsList.map(room => room.friendUserId);

	filterUsersWithoutRoom = () =>
		this.state.usersList.filter(
			user => !this.getAllUsersWithOpenRoom().includes(user.id),
		);

	deleteRoom = roomId => {
		this.props.setSelectedSessionAndRoomIds("", "");
		this.setState({
			roomsList: this.state.roomsList.filter(room => room.id !== roomId),
		});
		API.deleteRoom(roomId);
	};

	render() {
		const list = this.state.addRoomViewOn
			? this.state.roomsList
			: this.filterUsersWithoutRoom();

		return (
			<div className="side-menu-container">
				<AddRoom
					changeMenuView={this.changeMenuView}
					addRoomViewOn={this.state.addRoomViewOn}
				/>
				<ListDisplay
					list={list}
					onCardClick={
						this.state.addRoomViewOn
							? this.props.setSelectedSessionAndRoomIds
							: this.props.createNewRoomAndSessions
					}
					deleteRoom={this.deleteRoom}
					selectedRoom={this.props.selectedRoom}
				/>
			</div>
		);
	}
}

export default SideMenuContainer;
