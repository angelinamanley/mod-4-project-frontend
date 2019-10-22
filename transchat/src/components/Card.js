import React from "react";
import { Button, Image, List } from "semantic-ui-react";

const Card = props => {
	return (
		<div className={props.selected ? "card-mine" : "card"}>
			<div
				className="card-username"
				onClick={() => props.onCardClick(props.item)}
			>
				<Image
					avatar
					src="https://react.semantic-ui.com/images/avatar/small/lena.png"
					floated="left"
				/>
				<List.Content>
					<h5>{props.item.username}</h5>
				</List.Content>
			</div>
			{props.item.friendSessionId ? (
				<div className="card-delete-section">
					<Button
						onClick={() => {
							props.deleteRoom(props.item.id);
						}}
						inverted
						color="red"
					>
						X
					</Button>
				</div>
			) : null}
		</div>
	);
};

export default Card;
