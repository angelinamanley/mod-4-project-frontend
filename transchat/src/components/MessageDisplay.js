import React from "react";
import { Message } from "semantic-ui-react";

class MessageDisplay extends React.Component {
	render() {
		const date = new Date(this.props.created_at);
		const messageDate = `${date.getHours()}:${date.getMinutes()} ${date.getDay()}/${date.getMonth()}/${date.getYear()}`;
		return (
			<Message
				className={`message-display${
					this.props.selectedSessionId === this.props.session_id ? "-mine" : ""
				}`}
				color={
					this.props.selectedSessionId === this.props.session_id
						? "green"
						: null
				}
			>
				<span className="message-content">{this.props.content}</span>
				<span className="message-time">{messageDate}</span>
			</Message>
		);
	}
}

export default MessageDisplay;
