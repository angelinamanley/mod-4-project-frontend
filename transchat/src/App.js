import React from "react";
import "./App.css";
import SideMenuContainer from "./container/SideMenuContainer";
import ChatContainer from "./container/ChatContainer";
import NavBar from "./components/NavBar";
import API from "./adapter/API";
import SignInContainer from "./container/SignInContainer";

class App extends React.Component {
	state = {
		currentUserId: "",
		selectedRoomId: "",
		selectedSessionId: "",
		time: 0,
	};

	componentDidMount() {
		let time = this.state.time;
		// this.timeInterval = setInterval(() => {
		// 	this.setState({ time: ++time });
		// }, 1000);
	}

	componentWillUnmount() {
cd 	}

	setSelectedSessionAndRoomIds = item => {
		this.setState({
			selectedSessionId: item.mySessionId,
			selectedRoomId: item.id,
		});
	};

	createNewRoomAndSessions = user => {
		API.postRoom()
			.then(room => API.postSession(user.id, room.id))
			.then(session =>
				API.postSession(this.state.currentUserId, session.room_id),
			)
			.then(session =>
				this.setState({
					selectedSessionId: session.id,
					selectedRoomId: session.room_id,
				}),
			);
	};

	changeUser = id => {
		this.setState({
			currentUserId: parseInt(id),
		});
	};

	signIn = event => {
		event.preventDefault();
		API.postUser(event.target.username.value).then(user =>
			this.setState({ currentUserId: user.id }),
		);
	};

	render() {
		return (
			<div className="app">
				{this.state.currentUserId ? (
					<>
						<NavBar
							changeUser={this.changeUser}
							currentUserId={this.state.currentUserId}
						/>
						<SideMenuContainer
							currentUserId={this.state.currentUserId}
							createNewRoomAndSessions={this.createNewRoomAndSessions}
							setSelectedSessionAndRoomIds={this.setSelectedSessionAndRoomIds}
							time={this.state.time}
							selectedRoom={this.state.selectedRoomId}
						/>
						<ChatContainer
							selectedSessionId={this.state.selectedSessionId}
							selectedRoomId={this.state.selectedRoomId}
							time={this.state.time}
						/>
					</>
				) : (
					<SignInContainer signIn={this.signIn} />
				)}
			</div>
		);
	}
}

export default App;
