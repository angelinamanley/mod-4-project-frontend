import React from "react";
import Card from "./Card";

class ListDisplay extends React.Component {
	render() {
		return (
			<div className="list-display">
				{this.props.list.map(item => (
					<Card
						setSelectedSessionAndRoomIds={
							this.props.setSelectedSessionAndRoomIds
						}
						item={item}
						key={item.id}
					/>
				))}
			</div>
		);
	}
}

export default ListDisplay;
