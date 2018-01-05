import React, { Component } from 'react';
import Map from './map.js';
import Description from './components/descriptions.js';
import { Player } from './generics/person.js';
import './App.css';

const player = new Player({name: 'bob'});
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      room: Map[0],
      player,
    };
    this.state.room.inventory.push(this.state.player);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(input) {
    const test = input.split(' ');
    const value = this.state.room.inventory.filter(item => test[test.length - 1] === item.name);
    let testing;
    if (value.length > 0) testing = value[0].actions[test[0]]();

    /* going places */
    let room;
    const direction = {
      north: true,
      south: true,
      east: true,
      west: true,
    }

    if (direction[test[0]]) room = this.state.room.actions.go(test[0], this.state.player);
    if (direction[test[test.length - 1]]) room = this.state.room.actions.go(test[test.length-1], this.state.player);
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
