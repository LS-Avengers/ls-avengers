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
    this.state.room.inventory.push(this.state.player);
  }
  handleInput(input) {
    const test = input.split(' ');
    console.log(Object.keys(this.state.room.actions));
    if (['north', 'south', 'east', 'west'].includes(test[0])) {
      const room = this.state.room.actions.go(test[0], this.state.player);
      if (room) this.setState({ room });
      else alert('can\'t go that way');
    }
  }
  render() {
    let input;
    return (
      <div className="App">
        <h2>{this.state.room.name}</h2>
        <p>{this.state.room.description}</p>
        <p>{
          this.state.room.inventory
            ? this.state.room.inventory.map((test) => {
              if (test !== this.state.player) 
                return <span>{test.name}</span>
            })
            : ''
        }</p>
        <p>You can go {Object.keys(this.state.room.directions)}</p>
        {/* display current Room */}
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
