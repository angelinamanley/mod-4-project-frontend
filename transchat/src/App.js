import React from "react";
import "./App.css";
import SideMenuContainer from "./container/SideMenuContainer";
import ChatContainer from "./container/ChatContainer";
import NavBar from "./components/NavBar";
import API from "./adapter/API";

class App extends React.Component {
	state = {
		currentUserId: 1,
		selectedRoomId: "",
	};

	componentDidMount() {
		API.getUsers().then(console.log);
		API.getMessages(1).then(console.log);
	}

	setSelectedSessionId = id => {
		this.setState({ selectedRoomId: id });
	};

	render() {
		return (
			<div className="app">
				<NavBar />
				<SideMenuContainer
					currentUserId={this.state.currentUserId}
					setSelectedRoomId={this.setSelectedRoomId}
				/>
				<ChatContainer selectedRoomId={this.state.selectedRoomId} />
			</div>
		);
	}
}

export default App;
