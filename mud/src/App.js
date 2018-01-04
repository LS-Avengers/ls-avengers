import React, { Component } from 'react';
import Map from './map.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      room: Map[0],
    };
  }
  render() {
    let input;
    return (
      <div className="App">
        <p>{this.state.room.description}</p>
        {/* display current Room */}
        <form onSubmit={(e) => {
          e.preventDefault();
        }}>
          <input type="text" ref={node => input = node} />
        </form>
      </div>
    );
  }
}

export default App;
