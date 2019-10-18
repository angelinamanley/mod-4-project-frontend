import React from "react";

const Card = props => {
	return (
		<div
			onClick={() => props.onCardClick(props.item)}
			className="card"
		>
			{props.item.username}
		</div>
	);
};

export default Card;
