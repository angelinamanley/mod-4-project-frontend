import React from "react";
import "./App.css";
import SideMenuContainer from "./container/SideMenuContainer";
import ChatContainer from "./container/ChatContainer";
import NavBar from "./components/NavBar";

class App extends React.Component {
	state = {
		currentUserId: 6,
		selectedRoomId: 6,
		selectedSessionId: 6,
	};

	setSelectedSessionAndRoomIds = roomObject => {
		this.setState({ 
			selectedSessionId: parseInt(roomObject.id),
			selectedRoomId: parseInt(roomObject.attributes.sessions.find(
				session => session.user_id === this.state.currentUserId,
			).id),
		});
	};

	render() {
		return (
			<div className="app">
				<NavBar />
				<SideMenuContainer
					currentUserId={this.state.currentUserId}
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
