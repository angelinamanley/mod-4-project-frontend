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
				<button
					className="translate-button"
					onClick={this.props.switchTranslation}
				>
					TRANSCHAT
				</button>
				<div className="username">{this.props.currentUserId}</div>
			</div>
		);
	}
}

export default NavBar;
