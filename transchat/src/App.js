import React from "react";
import "./App.css";
import SideMenuContainer from "./container/SideMenuContainer";
import ChatContainer from "./container/ChatContainer";
import NavBar from "./components/NavBar";

function App() {
	return (
		<div>
			<NavBar />
			<SideMenuContainer />
			<ChatContainer />
		</div>
	);
}

export default App;
