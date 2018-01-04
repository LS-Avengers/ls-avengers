import Room from './generics/room.js';

var r1 = new Room({
  name: 'Starting Room',
  description: 'this is the place you start.',
  directions: {north: r2},
});
var r2 = new Room({
  name: 'Hallway',
  description: 'a generic hallway.',
  directions: {
    south: r1,
    north: r3,
  },
});
var r3 = new Room({
  name: 'The End',
  description: 'the end of the test area.',
  directions: {south: r2}
});

export default [r1,r2,r3];