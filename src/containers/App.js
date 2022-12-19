import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import { legends } from "../legends";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      legends: legends,
      searchfield: "",
    };
  }
  searchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };
  render() {
    const filteredLegends = this.state.legends.filter((legend) => {
      return (
        legend.name
          .toLowerCase()
          .includes(this.state.searchfield.toLowerCase()) ||
        legend.username
          .toLowerCase()
          .includes(this.state.searchfield.toLowerCase())
      );
    });
    return (
      <div className="tc">
        <h1 className="tc pa3 f1">The Apex Legends</h1>
        <SearchBox searchChange={this.searchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList legends={filteredLegends} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default App;
