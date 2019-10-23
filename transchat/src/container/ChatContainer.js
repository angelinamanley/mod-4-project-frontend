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

	componentDidUpdate(prevProps, prevState) {
		if (
			this.props.selectedRoomId !== prevProps.selectedRoomId ||
			this.props.time !== prevProps.time
		) {
			return this.props.selectedRoomId
				? API.getMessages(this.props.selectedSessionId).then(messages => {
						if (this.state.messages !== messages) {
							this.setState({ messages: messages });
							this.scrollToBottom();
						}
				  })
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

	scrollToBottom = () => {
		this.messagesEnd.scrollIntoView({ behavior: "smooth" });
	};

	render() {
		const sortedMessages =
			this.props.translation && this.state.messages
				? this.sortMessages(
						this.state.messages.map(message => {
							if (message.trans_messages[0]) {
								message.content = message.trans_messages[0].content;
							}
							return message;
						}),
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
				<div
					style={{ float: "left", clear: "both" }}
					ref={el => {
						this.messagesEnd = el;
					}}
				></div>
			</div>
		);
	}
}

export default ChatContainer;
