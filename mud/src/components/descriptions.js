import React, { Fragment } from 'react';

export default (props) => (
  <Fragment>
    <h2>{props.name}</h2>
    <p>{props.description}</p>
    <p>{props.inventory.map((item) => {
      if (item.name !== props.playerName)
        return <span>{item.name}</span>;
    })}</p>
    <p>{Object.keys(props.directions).map((value) => {
        return (
        <button onClick={() => {props.handleInput(value)}}>
          {value}
        </button>
        );
    })}</p>
  </Fragment>
);
        {/* <p>You can go {
          Object.keys(this.state.room.directions).map((dir) => {
            return (
              <button onClick={() => {this.handleInput(dir)}}>
                {dir}
              </button>
            );
          })
        }</p> */};