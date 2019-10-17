import React from "react";
import Card from "./Card";

class ListDisplay extends React.Component {


	render() {
		return (
			<div className="list-display">
				ListDisplay
            {this.props.roomsList.map(room => <Card usersList={this.props.usersList} room={room}  />)}

			
			</div>
		);
	}
}

export default ListDisplay;
