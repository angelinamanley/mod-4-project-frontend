import React from "react";

class MessageDisplay extends React.Component {
	render() {
		return (
			<div
				className={`message-display${
					this.props.selectedSessionId === this.props.session_id ? "-mine" : ""
				}`}
			>
				<span>{this.props.content}</span> - <span>{this.props.created_at}</span>
			</div>
		);
	}
}

export default MessageDisplay;
