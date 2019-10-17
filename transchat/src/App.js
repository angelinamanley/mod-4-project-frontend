import React from 'react';
import './App.css';
import API from './adapter/API'

class App extends React.Component {


  componentDidMount() {
    API.getUsers().then(console.log);

  }

  render(){

  return (
   <div>
     {}
   </div>
  );
  }
}

export default App;
