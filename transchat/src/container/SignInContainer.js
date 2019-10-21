import React from "react";

class SignInContainer extends React.Component {
	render() {
		return (
			<div>
				<h1>TRANSCHAT</h1>
				<form onSubmit={this.props.signIn}>
					<label htmlFor="username"></label>
					<input type="text" name="username" />
					<button>START TRANSCHATTING!</button>
				</form>
			</div>
		);
	}
}

export default SignInContainer;
