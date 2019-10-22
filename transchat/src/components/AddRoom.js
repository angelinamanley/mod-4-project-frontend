import React from "react";
import { Button } from "semantic-ui-react";

const AddRoom = props => {
	return (
		<div className="add-room">
			<h5 className="add-room-header">
				{props.addRoomViewOn ? "Start Conversation" : "Back to Conversations"}
			</h5>
			<Button
				clasic
				inverted
				color="blue"
				className="add-room-button"
				onClick={props.changeMenuView}
				icon={props.addRoomViewOn ? "write" : "reply"}
			></Button>
		</div>
	);
};

export default AddRoom;
