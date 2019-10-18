import React from "react";
import MessageDisplay from "../components/MessageDisplay";
import MessageForm from "../components/MessageForm";
import API from "../adapter/API";

class ChatContainer extends React.Component {
	state = {
		messages: [],
	};

	componentDidMount() {
		return this.props.selectedRoomId
			? API.getMessages(this.props.selectedSessionId).then(messages =>
					this.setState({ messages: messages }),
			  )
			: null;
	}

	componentDidUpdate(prevProps) {
		if (this.props.selectedRoomId !== prevProps.selectedRoomId) {
			return API.getMessages(this.props.selectedSessionId).then(messages =>
				this.setState({ messages: messages }),
			);
		}
	}

	sendMessage = content => {
		API.postMessage(this.props.selectedSessionId, content);
	};

	sortMessages = () =>
		!!this.state.messages
			? this.state.messages.sort(
					(a, b) =>
						new Date(a.created_at).getTime() - new Date(b.created_at).getTime(),
			  )
			: null;

	render() {
		const sortedMessages = this.sortMessages();
		return (
			<div className="chat-container">
				{!!sortedMessages
					? sortedMessages.map(message => (
							<MessageDisplay
								{...message}
								key={message.id}
								selectedSessionId={this.props.selectedSessionId}
							/>
					  ))
					: null}
				<MessageForm sendMessage={this.sendMessage} />
			</div>
		);
	}
}

export default ChatContainer;
