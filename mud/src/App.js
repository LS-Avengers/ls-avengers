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
    this.state.room.inventory.filter(item => item.name)
    if (['north', 'south', 'east', 'west'].includes(test[0])) {
      const room = this.state.room.actions.go(test[0], this.state.player);
      if (room) this.setState({ room });
      else alert('can\'t go that way');
    }
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
