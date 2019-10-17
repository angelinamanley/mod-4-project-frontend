import React from "react";
import RoomCard from "./RoomCard";

class ListDisplay extends React.Component {


	render() {
		return (
			<div className="list-display">
				ListDisplay
            {this.props.roomsList.map(room => <RoomCard setSelectedSessionAndRoomIds={this.props.setSelectedSessionAndRoomIds} usersList={this.props.usersList} room={room}  />)}

			
			</div>
		);
	}
}

export default ListDisplay;
