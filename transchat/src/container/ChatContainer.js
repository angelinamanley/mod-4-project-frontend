import React from "react";
import MessageDisplay from "../components/MessageDisplay";
import MessageForm from "../components/MessageForm";
import API from "../adapter/API";

class ChatContainer extends React.Component {
	state = {
		messages: [],
	};

	componentDidMount() {
		API.getMessages(this.props.selectedRoomId).then(messages =>
			this.setState({ messages: messages }),
		);
	}

	render() {
		return (
			<div className="chat-container">
				ChatContainer
				<MessageDisplay />
				<MessageDisplay />
				<MessageDisplay />
				<MessageDisplay />
				<MessageDisplay />
				<MessageDisplay />
				<MessageForm />
			</div>
		);
	}
}

export default ChatContainer;
