import React from "react";

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
					<button className="sign-in-button">START TRANSCHATTING!</button>
				</form>
			</div>
		);
	}
}

export default SignInContainer;
