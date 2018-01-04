import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      room: undefined,
    };
  }
  render() {
    let input;
    return (
      <div className="App">
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
