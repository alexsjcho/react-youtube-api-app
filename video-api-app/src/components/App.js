import React, { Component } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";

class App extends Component {
  onTermSubmit = term => {
    youtube.get("/search", {
      params: {
        q: term
      }
    });
  };
  render() {
    return (
      <div className="ui container">
        <h1>App Component</h1>
        <SearchBar onFormSubmit={this.onTermSubmit} />
      </div>
    );
  }
}

export default App;
