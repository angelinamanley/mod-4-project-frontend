import React from "react";

class MessageDisplay extends React.Component {
	render() {
		const date = new Date(this.props.created_at);
		const messageDate = `${date.getHours()}:${date.getMinutes()} ${date.getDay()}/${date.getMonth()}/${date.getYear()}`;
		return (
			<div
				className={`message-display${
					this.props.selectedSessionId === this.props.session_id ? "-mine" : ""
				}`}
			>
				<span className="message-content">{this.props.content}</span>
				<span className="message-time">{messageDate}</span>
			</div>
		);
	}
}

export default MessageDisplay;
