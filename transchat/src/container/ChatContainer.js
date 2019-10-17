import React from "react";
import MessageDisplay from "../components/MessageDisplay";
import MessageForm from "../components/MessageForm";

class ChatContainer extends React.Component {
	render() {
		return (
			<div className="chat-container">
				ChatContainer
				<MessageDisplay />
				<MessageForm />
			</div>
		);
	}
}

export default ChatContainer;
