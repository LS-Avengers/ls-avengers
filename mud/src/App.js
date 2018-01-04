import React, { Component } from 'react';
import Map from './map.js';

const Player = {name: 'bob'};
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      room: Map[0],
      player: Player,
    };
    this.actions = {
      go: (direction) => {
        console.log(Map[0]);
        console.log(this.state.room.directions);
        this.state.room.directions[direction].addToInventory(this.player);
        this.state.room.removeFromInventory(this.player);
        this.setState({room: this.state.room.directions[direction]});
      },
    };
  }
  render() {
    let input;
    return (
      <div className="App">
        <h2>{this.state.room.name}</h2>
        <p>{this.state.room.description}</p>
        <p>{
          this.state.room.inventory
            ? this.state.room.inventory
            : ''
        }</p>
        <p>You can go {Object.keys(this.state.room.directions)}</p>
        {/* display current Room */}
        <form onSubmit={(e) => {
          e.preventDefault();
          console.log(input);
          const test = input.value.split(' ');
          input = '';
          this.actions[test[0]](test[1])
        }}>
          <input type="text" ref={node => input = node} />
        </form>
      </div>
    );
  }
}

export default App;
