import React from "react";

const AddRoom = props => {
	return (
		<div className="add-room">
			Add Room{" "}
			<button onClick={props.changeMenuView}>
				{props.addRoomViewOn ? "+" : "x"}
			</button>
		</div>
	);
};

export default AddRoom;
