import React from "react";

class RoomCard extends React.Component {
	findUserName = () => {
		let recipient = this.props.usersList.find(
			user => user.id === this.props.room.attributes.sessions[1].user_id,
		);

		return recipient.username;
	};

	render() {
		return (
			<div
				onClick={() => this.props.setSelectedSessionAndRoomIds(this.props.room)}
				className="card"
			>
				{this.findUserName()}
			</div>
		);
	}
}

export default RoomCard;
