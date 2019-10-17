import React from "react";

class Card extends React.Component {

   
    findUserName = () => {
        let recipient = this.props.usersList.find(user => user.id === this.props.room.attributes.sessions[1].user_id)
        return recipient.username
    }

	render() {
		return <div onClick={null} className="card">{this.findUserName()}</div>;
	}
}

export default Card;
