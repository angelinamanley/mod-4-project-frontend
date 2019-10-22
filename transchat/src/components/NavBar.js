import React from "react";
import { Menu } from "semantic-ui-react";

class NavBar extends React.Component {
	render() {
		return (
			// <div
			// 	className="nav-bar"
			// 	onSubmit={event => {
			// 		event.preventDefault();
			// 		this.props.changeUser(event.target.userId.value);
			// 	}}
			// >
			// 	<button
			// 		className="translate-button"
			// 		onClick={this.props.switchTranslation}
			// 	>
			// 		TRANSCHAT
			// 	</button>
			// 	<div className="username">{this.props.currentUserId}</div>
			// </div>

			<Menu className="nav-bar">
				<Menu.Item>
					<img
						src="https://react.semantic-ui.com/logo.png"
						onClick={this.props.switchTranslation}
					/>
				</Menu.Item>

				<Menu.Item name="username">{this.props.currentUsername}</Menu.Item>

				<Menu.Item
					name="sign-out"
					onClick={this.props.signOut}
					position="right"
				>
					Sign out
				</Menu.Item>
			</Menu>
		);
	}
}

export default NavBar;
