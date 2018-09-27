import React, { Component } from "react";
import "./App.css";
import Card from "./components/card/card";
import Header from "./components/header/header";
import Sidebar from "./components/sidbar/sidebar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="main">
          <div className="cards">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <Sidebar />
        </div>
      </div>
    );
  }
}

export default App;
