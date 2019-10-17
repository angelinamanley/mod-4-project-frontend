import React from "react";

class MessageForm extends React.Component {
	state = {
		message: "",
	};

	handleChange = event => {
		this.setState({ message: event.target.value });
	};

	handleFormSubmission = event => {
		event.preventDefault();
		this.props.sendMessage(this.state.message);
		this.setState({ message: "" });
	};

	render() {
		return (
			<div className="message-form-container">
				<form className="message-form" onSubmit={this.handleFormSubmission}>
					<input
						type="text"
						className="input-area"
						value={this.state.message}
						onChange={this.handleChange}
					/>
					<button>SEND</button>
				</form>
			</div>
		);
	}
}

export default MessageForm;
