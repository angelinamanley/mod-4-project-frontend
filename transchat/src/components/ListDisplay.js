import React from "react";
import Card from "./Card";

class ListDisplay extends React.Component {
	render() {
		return (
			<div className="list-display">
				{this.props.list.map(item => (
					<Card
						onCardClick={
							this.props.onCardClick
						}
						item={item}
						key={item.id}
					/>
				))}
				{/* {this.props.roomsList.map(room => (
					<RoomCard
						setSelectedSessionAndRoomIds={
							this.props.setSelectedSessionAndRoomIds
						}
						usersList={this.props.usersList}
						room={room}
						key={room.id}
						currentUserId={this.props.currentUserId}
					/>
				))} */}
			</div>
		);
	}
}

export default ListDisplay;
