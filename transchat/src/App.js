import React from "react";
import "./App.css";
import SideMenuContainer from "./container/SideMenuContainer";
import ChatContainer from "./container/ChatContainer";
import NavBar from "./components/NavBar";

class App extends React.Component {
	state = {
		currentUserId: 1,
		selectedRoomId: 1,
		selectedSessionId: 1,
	};

	setSelectedSessionAndRoomIds = roomObject => {
		this.setState({
			selectedSessionId: roomObject.id,
			selectedRoomId: roomObject.sessions.find(
				session => session.user_id === this.state.currentUserId,
			).id,
		});
	};

	render() {
		return (
			<div className="app">
				<NavBar />
				<SideMenuContainer
					currentUserId={this.state.currentUserId}
					setSelectedRoomId={this.setSelectedRoomId}
					setSelectedSessionId={this.setSelectedSessionId}
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
