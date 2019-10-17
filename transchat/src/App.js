import React from "react";
import "./App.css";
import SideMenuContainer from "./container/SideMenuContainer";
import ChatContainer from "./container/ChatContainer";
import NavBar from "./components/NavBar";

class App extends React.Component {
	state = {
		currentUserId: 1,
		selectedSessionId: "",
	};

	setSelectedSessionId = id => {
		this.setState({ selectedSessionId: id });
	};

	render() {
		return (
			<div className="app">
				<NavBar />
				<SideMenuContainer
					currentUserId={this.state.currentUserId}
					setSelectedSessionId={this.setSelectedSessionId}
				/>
				<ChatContainer selectedSessionId={this.state.selectedSessionId} />
			</div>
		);
	}
}

export default App;
