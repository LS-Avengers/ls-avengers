import React, { Component } from 'react';
import Map from './components/map.js';
import Description from './components/descriptions.js';
import { Player } from './generics/person.js';
import items from './components/itemList.js';

import './App.css';

const player = new Player({
  name: 'bob',
  description: 'Meet Bob. A pharmaceutical representative for Pharma Corp. He has amassed a significant amount of wealth' +
   'from his high paying job and constantly borrowing money from acquaintances so he would not have to make a trip to the bank,' +
  'which a little over two blocks away.',
  revenue: 'level 4', // but he doesn't want to spend it
});

const itemNames = items.map(item => item.name);
const test = (input) => {
  for (let i = 0; i < itemNames.length; i++) {
    if (input.indexOf(itemNames[i]) !== -1) {
      return itemNames[i];
    }
  }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      room: Map[0],
      player,
      updates: '', // intended to be logging of updates
      netWorth: 100000
    };
    this.state.room.inventory.push(this.state.player);
    this.handleInput = this.handleInput.bind(this);
  } // will mount?? with the state object--reset us to room zero

  componentWillMount() {
    if (this.props.netWorth === 0) {
      this.setState = {
        room: Map[0],
        player,
        updates: ''
      }
    }
  }
  handleInput(input) {
    const { room, player } = this.state;
    const doing = input.split(' ')[0];
    const item = test(input) || input.split(' ').reverse()[0];
    const direction = { north: true, south: true, east: true, west: true };

    if (doing === 'inventory' || doing === 'i') {
      this.parseReturnValue(`You're carrying ${player.inventory.reduce((memo, curr) => memo += curr.name, '') || 'nothing'}.`);
      return
    }
    if (direction[doing]) {
      const nRoom = room.actions.go(doing, player);
      if (nRoom) {
        this.setState({ room: nRoom, update: `you walk ${doing}.` });
      }
      else this.parseReturnValue('You can\'t go that way');
      return;
    }
    if (doing === 'go') {
      const nRoom = room.actions[doing](item, player);
      if (nRoom) this.setState({ room: nRoom, update: `you ${doing} ${item}.` });
      else this.parseReturnValue('you can\'t go that way');
      return;
    }
    if (doing === 'look') {
      const lRoom = room.actions[doing](item);
      if (lRoom) this.parseReturnValue(lRoom);
      else this.parseReturnValue('There\'s no looking that way');
      return;
    }

    let value = room.inventory.filter(rItem => rItem.name === item)[0];
    if (!value) value = player.inventory.filter(pItem => pItem.name === item)[0];

    if (doing === 'examine') {
      if (!value) this.parseReturnValue(room.actions[doing]());
      else this.parseReturnValue(value.actions[doing]());
      return;
    }
    if (!!value && Object.keys(value.actions).includes(doing)) {
      const retVal = value.actions[doing](player, room);
      this.parseReturnValue(`you ${doing} the ${value.name}.`, retVal);
      return;
    }
    this.parseReturnValue('You can\'t do that.');
  }
  parseReturnValue(...args) {
    console.log(args);  
    let retVal = '';
    for (let i = 0; i < args.length; i++) {
      if (typeof args[i] === 'string') retVal += args[i] + ' ';
      if (typeof args[i] === 'object' && !Array.isArray(args[i])) {
        retVal += Object.keys(args[i]).reduce((memo, curr) => {
          if (curr === 'name') memo += `You see ${args[i][curr]}.`
          else if (curr === 'description') memo += args[i][curr];
          else if (curr === 'actions') memo += `You could probably ${args[i][curr].join(', ')}.`;
          else if (curr === 'inventory') memo += `It contains ${args[i][curr].join(', ') || 'nothing'}.`;
          else if (curr === 'directions') memo += `You see exits twords ${args[i][curr].join(', ')}.`
          else if (Array.isArray(args[i][curr])) memo += `You also see ${args[i][curr].join(', ')}`;
          else if (typeof args[i][curr] === 'string') memo += args[i][curr];
          return memo += ' ';
        }, '');
      }
    }
    console.log(retVal);
    if (retVal !== '') this.setState({ update: retVal });
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
        <p>{this.state.update}</p>
        <form onSubmit={(e) => {
          e.preventDefault();
          this.handleInput(input.value);
          input.value = '';
        }}>
          ><input type="text" ref={node => input = node} autoFocus="true"/>
        </form>
      </div>
    );
  }
}

export default App;
