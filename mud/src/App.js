import React, { Component } from 'react';
import Map from './map.js';
import Description from './components/descriptions.js';
import { Player } from './generics/person.js';
import items from './itemList.js';

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
        updates: 'You had a crazy dream where you lost all of your money!'
      }
    }
  }
  handleInput(input) {
    const { room, player } = this.state;
    const doing = input.split(' ')[0];
    const item = test(input) || input.split(' ').reverse()[0];
    const direction = { north: true, south: true, east: true, west: true };

    if (direction[doing]) {
      const nRoom = room.actions.go(doing, player);
      if (nRoom) this.setState({ room: nRoom });
      else console.log('You can\'t go that way');
      return;
    }
    if (doing === 'go') {
      const nRoom = room.actions[doing](item, player);
      if (nRoom) this.setState({ room: nRoom });
      else console.log('you can\'t go that way');
      return;
    }
    if (doing === 'look') {
      const lRoom = room.actions[doing](item);
      if (lRoom) console.log(lRoom);
      else console.log('There\'s no looking that way');
      return;
    }

    let value = room.inventory.filter(rItem => rItem.name === item)[0];
    if (!value) value = player.inventory.filter(pItem => pItem.name === item)[0];

    if (doing === 'examine') {
      if (!value) console.log(room.actions[doing]());
      else console.log(value.actions[doing]());
      return;
    }
    if (!!value && Object.keys(value.actions).includes(doing)) {
      const retVal = value.actions[doing](player, room);
      console.log(`you ${doing} the ${value.name}.`, retVal);
      return;
    }
    console.log('You can\'t do that.');
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
          <input type="text" ref={node => input = node} autofocus="true"/>
        </form>
      </div>
    );
  }
}

export default App;
