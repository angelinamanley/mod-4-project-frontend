import React from "react";
import "./App.css";
import SideMenuContainer from "./container/SideMenuContainer";
import ChatContainer from "./container/ChatContainer";
import NavBar from "./components/NavBar";
import API from './adapter/API'

class App extends React.Component {


  componentDidMount() {
    API.getUsers().then(console.log);

  }

  render(){

  return (
    <div>
    <NavBar />
    <SideMenuContainer />
    <ChatContainer />
  </div>
  );
  }
}

export default App;
