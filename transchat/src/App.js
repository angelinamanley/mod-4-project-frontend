import React from "react";
import "./App.css";
import SideMenuContainer from "./container/SideMenuContainer";
import ChatContainer from "./container/ChatContainer";
import NavBar from "./components/NavBar";
import API from "./adapter/API";


class App extends React.Component {
	state = {
		currentUserId: 6,
		selectedRoomId: "",
		selectedSessionId: "",
	};

	setSelectedSessionAndRoomIds = (item) => {
		this.setState({
			selectedSessionId: item.mySessionId,
			selectedRoomId: item.id,
		});
	};

	createNewRoomAndSessions = (user) => {
		API.postRoom().then(room => API.postSession(user.id, room.id))
		.then(session => API.postSession(this.state.currentUserId, session.room_id))
		.then(session => 
		this.setState({
			selectedSessionId: session.id,
			selectedRoomId: session.room_id,
		}))
    }

	changeUser = id => {
		this.setState({ currentUserId: parseInt(id) });
	};

	render() {
		return (
			<div className="app">
				<NavBar changeUser={this.changeUser} />
				<SideMenuContainer
					currentUserId={this.state.currentUserId}
					createNewRoomAndSessions={this.createNewRoomAndSessions}
					setSelectedSessionAndRoomIds={this.setSelectedSessionAndRoomIds}
				/>
				<ChatContainer
					selectedSessionId={this.state.selectedSessionId}
					selectedRoomId={this.state.selectedRoomId}
				/>
			</div>
		);
	}
}

export default App;
