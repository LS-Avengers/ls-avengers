import React, { Fragment } from 'react';
// class container is defined in App.css
export default (props) => (
  <div className="Container">
    <h2>{props.name}</h2>
    <p>{props.description}</p>
    <p>You are at the {props.name}.{Object.keys(props.directions).map((value) => {
      return <Fragment>
        The {props.directions[value].name} is to the
        <strong onClick={() => {props.handleInput(value)}}> {value}</strong>.
      </Fragment>
    })}</p>
    <p>{props.inventory.map((item) => {
      if (item.name !== props.playerName)
        return <Fragment>There is a <em onClick={() => {props.handleInput(`examine ${item.name}`)}} className="Item">{item.name}</em>.</Fragment>;
    })}</p>
  </div>
);


    /// <p>{Object.keys(props.directions).map((value) => {
    //     return (
    //     <button onClick={() => {props.handleInput(value)}}>
    //       {value}
    //     </button>
    //     );
    // })}</p>