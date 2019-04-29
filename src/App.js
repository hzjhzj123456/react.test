import React, { Component } from 'react';
import Router  from "./router"
class App extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className="">
        <Router />
      </div>
    );
  }
}

export default App;
