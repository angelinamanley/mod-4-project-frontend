import React from "react";

class MessageForm extends React.Component {
	render() {
		return (
			<div className="message-form-container">
				<form className="message-form">
					<input type="text" className="input-area" />
				</form>
			</div>
		);
	}
}

export default MessageForm;
