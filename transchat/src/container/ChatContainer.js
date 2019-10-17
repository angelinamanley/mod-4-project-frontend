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
				{this.state.messages.map(message => (
					<MessageDisplay
						{...message}
						key={message.id}
						selectedSessionId={this.props.selectedSessionId}
					/>
				))}
				<MessageForm />
			</div>
		);
	}
}

export default ChatContainer;
