import React from "react";
import { Button } from "semantic-ui-react";

class SignInContainer extends React.Component {
	render() {
		return (
			<div className="sign-in">
				<h1 className="header">TRANSCHAT</h1>
				<form onSubmit={this.props.signIn} className="sign-in-form">
					<input
						type="text"
						name="username"
						placeholder="Username"
						className="username-input"
					/>
					<Button>START TRANSCHATTING!</Button>
				</form>
			</div>
		);
	}
}

export default SignInContainer;
