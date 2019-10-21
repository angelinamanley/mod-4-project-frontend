import React from "react";

const Card = props => {
	return (
		<div className="card">
			<div onClick={() => props.onCardClick(props.item)}>
				{props.item.username}
			</div>
			<div>
				{props.item.friendSessionId && props.selected ? (
					<button
						onClick={() => {
							props.deleteRoom(props.item.id);
						}}
					>
						X
					</button>
				) : null}
			</div>
		</div>
	);
};

export default Card;
