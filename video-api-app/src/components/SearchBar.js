import React, { Component } from "react";

class SearchBar extends Component {
  state = { term: "" };

  onInputChange = () => {
    //code here
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <h2>SearchBar Component</h2>
        <form className="ui form">
          <div className="field">
            <label> Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
