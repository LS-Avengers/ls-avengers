import React, { Component } from 'react';
import Map from './map.js';
import Description from './components/descriptions.js';

const Player = {name: 'bob'};
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      room: Map[0],
      player: Player,
    };
    this.state.room.inventory.push(this.state.player);
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput(input) {
    const test = input.split(' ');
    const value = 
      this.state.room.inventory.filter(item => test[test.length - 1] === item.name);

    const direction = {
      north: true,
      south: true,
      east: true,
      west: true,
    }
    let room;
    if (direction[test[0]]) room = this.state.room.actions.go(test[0], this.state.player);
    if (direction[test[test.length - 1]]) room = this.state.room.actions.go(test[test.length-1], this.state.player);
    if (value.length > 0) value[0].actions[test[0]];
    if (room) this.setState({ room });
    else if (room === false) alert('can\'t go that way');
  }
  render() {
    let input;
    const room = this.state.room;

    return (
      <div className="App">
        <Description
          name={room.name}
          description={room.description}
          inventory={room.inventory}
          playerName={this.state.player.name}
          directions={room.directions}
          handleInput={this.handleInput}
        />
        <form onSubmit={(e) => {
          e.preventDefault();
          this.handleInput(input.value);
          input.value = '';
        }}>
          <input type="text" ref={node => input = node} />
        </form>
      </div>
    );
  }
}

export default App;
