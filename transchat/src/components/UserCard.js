import React from "react";

class UserCard extends React.Component {

   

	render() {
		return <div onClick={null} className="card">{this.props.user.username}</div>;
	}
}

export default UserCard;
