import React, { Component } from "react";
import NavBar from "./components/navbar.jsx";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="">
          <Counters />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
