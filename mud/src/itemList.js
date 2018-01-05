// import GameObject from './gameObject.js';
// import { Person, NPC, Player } from './generics/person.js';
import Item from './generics/item.js';
import map from './map.js';

// List of interactive items/objects that pussh the story forward

// fridge, homeComputer, workComputer, flyer, camera, mapItem, treeOfLife
// moralFriend, Jerkface McGee, personWithDog, Boss2, Boss3, storeClerk (purchase snapples)
// snapple in fridge in kitchen
var snapple = new Item({
  name: 'snapple',
  description: 'it\'s a snapple bottle',
  canPickup: true,
});
snapple.addToActions('open', () => {
  map[1].addNewDirection('north', map[2]);
  return 'You opened the snapple bottle, "THE TREE OF LIFE IS CLOSER THAN IT MAY APPEAR!"'
});

var fridge = new Item({
  name: 'fridge',
  description: 'Fridge with a refreshing Snapple',
});
fridge.addToInventory(snapple);
fridge.addToActions('open', (function() {
  return `You see ${this.inventory.reduce((memo, item) => {return memo + item.name}, '') || 'nothing'}`;
}).bind(fridge));
fridge.addToActions('get', (function(person) {
  this.removeFromInventory(snapple);
  person.addToInventory(snapple);
  return 'with a sigh, you resign to snapple.'
}).bind(fridge));

var homeComputer = new Item({
  name: 'home computer',
  description: 'Your computer is currently on',
  // possibly show ascii picture
  // possibly turn off
});

var workComputer = new Item({
  name: 'work computer',
  description: 'Your work computer',
});

var flyer = new Item({
  name: 'flyer',
  description: 'Oh WOW! It\'s a flyer for a Lawyer Convention in Olympus Park',
  canPickup: true,
  // learn location of lawyer convention
});

var camera = new Item({
  name: 'camera',
  description: 'It\'s a decent digital camera that can post to social media',
  canPickup: true,
});

var mapItem = new Item({
  name: 'map',
  description: 'A nice map of Everytown, USA...dated 50 years ago!',
  canPickup: true,
});

var treeOfLife = new Item({
  name: "Tree Of Life",
  description: "The amazing tree of life! Gaze at its eternal glory",
  // chop down tree action
  // take picture of tree action
});

var snapples = new Item({
  name: 'A Bunch of Snapples',
  description: 'A whole bunch of snapples! Let\'s check all the lids!',
  // get snapples
  // check snapples
    // No info about the tree of life -- need to go find it somewhere else
});

export default [fridge, snapple, homeComputer, workComputer, flyer, camera, mapItem, treeOfLife, snapples];