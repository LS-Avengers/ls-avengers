import Item from '../generics/item';
import map from '../map.js';

const snapple = new Item({
  name: 'snapple',
  description: 'it\'s a snapple bottle',
  canPickup: true,
});
snapple.addToActions('open', () => {
  map[1].addNewDirection('north', map[2]);
  return 'You opened the snapple bottle, "THE TREE OF LIFE IS CLOSER THAN IT MAY APPEAR!"'
});

export default snapple;