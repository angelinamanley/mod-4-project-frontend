import React from "react";

const Card = props => {
	return (
		<div
			onClick={() => props.setSelectedSessionAndRoomIds(props.item.id, props.item.mySessionId)}
			className="card"
		>
			{props.item.username}
		</div>
	);
};

export default Card;
