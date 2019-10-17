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

	sendMessage = content => {
		API.postMessage(this.props.selectedSessionId, content);
	};

	sortMessages = () =>
		this.state.messages.sort(
			(a, b) =>
				new Date(a.created_at).getTime() - new Date(b.created_at).getTime(),
		);

	render() {
		const sortedMessages = this.sortMessages();
		return (
			<div className="chat-container">
				{sortedMessages.map(message => (
					<MessageDisplay
						{...message}
						key={message.id}
						selectedSessionId={this.props.selectedSessionId}
					/>
				))}
				<MessageForm sendMessage={this.sendMessage} />
			</div>
		);
	}
}

export default ChatContainer;
