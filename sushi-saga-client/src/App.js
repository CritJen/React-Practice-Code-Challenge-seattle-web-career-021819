import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
  constructor() {
    super();
    this.state = {
      sushis: [],
      eaten: [],
      money: 100
    };
  }

  getSushis = () => {
    fetch(API)
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          sushis: data,
          eaten: [],
          currentSushiIndex: 0
        });
      });
  };

  componentDidMount = () => {
    this.getSushis();
  };

  increaseSushiIndex = () => {
    if (this.state.currentSushiIndex < 96) {
      let newIndex = this.state.currentSushiIndex + 4;
      this.setState({ currentSushiIndex: newIndex });
    } else {
      this.setState({ currentSushiIndex: 0 });
    }
  };

  eatSushi = sushi => {
    if (this.state.money - sushi.price > 0) {
      this.setState({
        eaten: [...this.state.eaten, sushi],
        money: this.state.money - sushi.price
      });
    } else {
      alert("You are out of sushi money");
    }
  };

  render() {
    let { sushis, eaten, currentSushiIndex } = this.state;
    return (
      <div className="app">
        <SushiContainer
          sushis={sushis.slice(currentSushiIndex, currentSushiIndex + 4)}
          eaten={this.state.eaten}
          increaseSushiIndex={this.increaseSushiIndex}
          eatSushi={this.eatSushi}
        />
        <Table money={this.state.money} eaten={this.state.eaten} />
      </div>
    );
  }
}

export default App;
