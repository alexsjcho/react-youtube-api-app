import React, { Component } from "react";
import SearchBar from "./SearchBar";

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <h1>App Component</h1>
        <SearchBar />
      </div>
    );
  }
}

export default App;
