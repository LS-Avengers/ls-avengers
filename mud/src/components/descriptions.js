import React, { Fragment } from 'react';

export default (props) => (
  <div>
    <h2>{props.name}</h2>
    <p>{props.description}</p>
    <p>{props.inventory.map((item) => {
      if (item.name !== props.playerName)
        return <Fragment>{item.name}</Fragment>;
    })}</p>
    <p>You are at the {props.name}.{Object.keys(props.directions).map((value) => {
      return <Fragment> The {props.directions[value].name} is to the {value}.</Fragment>
    })}</p>
    <p>{Object.keys(props.directions).map((value) => {
        return (
        <button onClick={() => {props.handleInput(value)}}>
          {value}
        </button>
        );
    })}</p>
  </div>
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