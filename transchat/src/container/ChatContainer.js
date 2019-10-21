import React from "react";
import MessageDisplay from "../components/MessageDisplay";
import MessageForm from "../components/MessageForm";
import API from "../adapter/API";

class ChatContainer extends React.Component {
	state = {
		messages: [],
		language: "en",
	};

	componentDidMount() {
		return this.props.selectedRoomId
			? API.getMessages(this.props.selectedSessionId).then(messages =>
					this.setState({ messages: messages }),
			  )
			: null;
	}

	componentDidUpdate(prevProps) {
		if (
			this.props.selectedRoomId !== prevProps.selectedRoomId ||
			this.props.time !== prevProps.time
		) {
			return this.props.selectedRoomId
				? API.getMessages(this.props.selectedSessionId).then(
						messages => console.log(messages),
						// this.setState({ messages: messages }),
				  )
				: this.setState({ messages: [] });
		}
	}

	sendMessage = content => {
		API.postMessage(this.props.selectedSessionId, content, this.state.language);
	};

	sortMessages = messages =>
		!!messages
			? messages.sort(
					(a, b) =>
						new Date(a.created_at).getTime() - new Date(b.created_at).getTime(),
			  )
			: null;

	render() {
		const sortedMessages = this.props.translation
			? this.sortMessages(
					this.state.messages.map(message => message.trans_message.content),
			  )
			: this.sortMessages(this.state.messages);
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
				{this.props.selectedRoomId ? (
					<MessageForm sendMessage={this.sendMessage} />
				) : null}
			</div>
		);
	}
}

export default ChatContainer;
