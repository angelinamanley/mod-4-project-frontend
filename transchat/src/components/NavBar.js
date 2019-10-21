import React from "react";

class NavBar extends React.Component {
	render() {
		return (
			<div
				className="nav-bar"
				onSubmit={event => {
					event.preventDefault();
					this.props.changeUser(event.target.userId.value);
				}}
			>
				<h3>TRANSCHAT</h3>
				<div className="username">{this.props.currentUserId}</div>
			</div>
		);
	}
}

export default NavBar;
