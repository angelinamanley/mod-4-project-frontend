import React from "react";
import Card from "./Card";

class ListDisplay extends React.Component {
	render() {
		return (
			<div className="list-display">
				ListDisplay
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		);
	}
}

export default ListDisplay;
