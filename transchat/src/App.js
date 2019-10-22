import React from "react";
import "./App.css";
import SideMenuContainer from "./container/SideMenuContainer";
import ChatContainer from "./container/ChatContainer";
import NavBar from "./components/NavBar";
import API from "./adapter/API";
import SignInContainer from "./container/SignInContainer";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

class App extends React.Component {
	state = {
		currentUserId: "",
		currentUsername: "",
		selectedRoomId: "",
		selectedSessionId: "",
		translation: true,
		time: 0,
	};

	componentDidMount() {
		let time = this.state.time;
		this.timeInterval = setInterval(() => {
			this.setState({ time: ++time });
		}, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timeInterval);
	}

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
		if (event.target.username.value) {
			API.postUser(event.target.username.value).then(user =>
				this.setState({
					currentUserId: user.id,
					currentUsername: user.username,
				}),
			);
		}
	};

	switchTranslation = () => {
		this.setState({ translation: !this.state.translation });
	};

	signOut = () => {
		this.setState({
			currentUserId: "",
			currentUsername: "",
			selectedRoomId: "",
			selectedSessionId: "",
			translation: true,
		});
	};

	render() {
		const body = (
			<>
				<NavBar
					changeUser={this.changeUser}
					currentUserId={this.state.currentUserId}
					currentUsername={this.state.currentUsername}
					switchTranslation={this.switchTranslation}
					signOut={this.signOut}
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
					translation={this.state.translation}
				/>
			</>
		);

		const signin = <SignInContainer signIn={this.signIn} />;

		return (
			<Router>
				<div className="app">
					<Route exact path="/sign-in" render={() => signin} />
					{this.state.currentUserId ? (
						<Redirect to="/app" />
					) : (
						<Redirect to="/sign-in" />
					)}
					<Route exact path="/app" render={() => body} />
				</div>
			</Router>
		);
	}
}

export default App;
