import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav";
import MainContainer from "./redux/containers/MainContainer";
export class App extends Component {

  render() {
    return (
      <div>
        <Nav/>
        <MainContainer />
      </div>
    );
  }
}

export default App;
