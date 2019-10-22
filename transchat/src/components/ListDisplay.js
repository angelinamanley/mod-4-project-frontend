import React from "react";
import Card from "./Card";
import { List } from "semantic-ui-react";

class ListDisplay extends React.Component {
	render() {
		return (
			<List className="list-display">
				{this.props.list.map(item => (
					<Card
						onCardClick={this.props.onCardClick}
						item={item}
						key={item.id}
						deleteRoom={this.props.deleteRoom}
						selected={this.props.selectedRoom === item.id}
					/>
				))}
			</List>
		);
	}
}

export default ListDisplay;
