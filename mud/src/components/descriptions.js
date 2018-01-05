import React, { Fragment } from 'react';
// class container is defined in App.css
export default (props) => (
  <div className="Container">
    <h2>{props.name}</h2>
    <p>{props.description}</p>
    <p>{props.inventory.map((item) => {
      if (item.name !== props.playerName)
        return <Fragment>{item.name}</Fragment>;
    })}</p>
    <p>You are at the {props.name}.{Object.keys(props.directions).map((value) => {
      return <Fragment>
        The {props.directions[value].name} is to the
          <span onClick={() => {props.handleInput(value)}}>{value}</span>.
          </Fragment>
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