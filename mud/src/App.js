import React, { Component } from 'react';
import Map from './map.js';
import Description from './components/descriptions.js';
import { Player } from './generics/person.js';

// import Item from './generics/item.js';

// const stack = [wrapper(go, room)]

// const wrapper = (funct, room, ...args) => {
//   console.log(...args);
//   if (room === this.state.room) {
//     funct(args);
//   }
// }
import './App.css';

const player = new Player({name: 'bob'});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      room: Map[0],
      player,
      updates: ''
    };
    this.state.room.inventory.push(this.state.player);
    this.handleInput = this.handleInput.bind(this);
  }  

  handleInput(input) {
    const test = input.split(' ');
    const value = this.state.room.inventory.filter(item => test[test.length - 1] === item.name);
    let testing
    if (value.length > 0 && Object.keys(value[0].actions).includes(test[0])) {
      testing = value[0].actions[test[0]](this.state.player, this.state.room);
      // const test2 = [`you ${test[0]} the ${value[0].name}.`, ...[Object.values(testing)]];
      console.log(`you ${test[0]} the ${value[0].name}.`, testing);
    }
    /* examine/look/go */
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
        <p>{this.state.actions}</p>
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
