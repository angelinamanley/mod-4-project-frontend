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
				NavBar
				<form>
					<input type="number" name="userId" />
					<button>CHANGE</button>
				</form>
				{this.props.currentUserId}
			</div>
		);
	}
}

export default NavBar;
