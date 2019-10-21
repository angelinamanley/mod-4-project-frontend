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
				<span>TRANSCHAT</span>
				<div className="username">{this.props.currentUserId}</div>
			</div>
		);
	}
}

export default NavBar;
