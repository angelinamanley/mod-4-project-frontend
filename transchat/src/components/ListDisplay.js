import React from "react";
import Card from "./Card";

class ListDisplay extends React.Component {
	render() {
		return (
			<div className="list-display">
				{this.props.list.map(item => (
					<Card
						onCardClick={this.props.onCardClick}
						item={item}
						key={item.id}
						deleteRoom={this.props.deleteRoom}
						selected={this.props.selectedRoom === item.id}
					/>
				))}
			</div>
		);
	}
}

export default ListDisplay;
