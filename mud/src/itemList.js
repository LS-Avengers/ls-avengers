// import GameObject from './gameObject.js';
// import { Person, NPC, Player } from './person.js';
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
  description: 'Fridge filled with a refreshing Snapple',
});
fridge.addToInventory(snapple);
fridge.open = (function() {
  return `You see ${this.inventory.reduce((memo, item) => memo + item.name, '') || 'nothing'}`;
}).bind(fridge);
fridge.addToActions('open', fridge.open);
fridge.addToActions('get', (function(person) {
  this.removeFromInventory(snapple);
  person.addToInventory(snapple);
  return 'with a sigh, you resign to snapple.'
}).bind(fridge));
var homeComputer = new Item({

});

var workComputer = new Item({

});

var flyer = new Item({

});

var camera = new Item({

});

var mapItem = new Item({

});

var treeOfLife = new Item({

});
export default [fridge, snapple, homeComputer, workComputer, flyer, camera, mapItem, treeOfLife];