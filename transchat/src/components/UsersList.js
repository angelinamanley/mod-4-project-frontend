import React from "react";
import UserCard from "./UserCard";

class UsersList extends React.Component {
	render() {
		return (
			<div className="list-display">
				{this.props.usersList.map(user => (
					<UserCard user={user} key={user.id} />
				))}
			</div>
		);
	}
}

export default UsersList;
