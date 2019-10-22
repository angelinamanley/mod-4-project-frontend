import React from "react";
import { Input } from "semantic-ui-react";

class MessageForm extends React.Component {
	state = {
		message: "",
	};

	handleChange = event => {
		this.setState({ message: event.target.value });
	};

	handleFormSubmission = event => {
		event.preventDefault();
		if (!!this.state.message) {
			this.props.sendMessage(this.state.message);
		}
		this.setState({ message: "" });
	};

	render() {
		return (
			<div className="message-form-container">
				<form className="message-form" onSubmit={this.handleFormSubmission}>
					<Input
						action={{
							color: "green",
							icon: "send",
						}}
						placeholder="Message..."
						type="text"
						className="input-area"
						value={this.state.message}
						onChange={this.handleChange}
					/>
				</form>
			</div>
		);
	}
}

export default MessageForm;
