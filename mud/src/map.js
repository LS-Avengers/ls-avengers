import Room from './generics/room.js';

// var r1 = new Room({
//   name: 'Starting Room',
//   description: 'this is the place you start.',
//   // directions: {north: r2},
// });
// var r2 = new Room({
//   name: 'Hallway',
//   description: 'a generic hallway.',
//   // directions: {
//   //   south: r1,
//   //   north: r3,
//   // },
// });
// var r3 = new Room({
//   name: 'The End',
//   description: 'the end of the test area.',
//   // directions: {south: r2}
// });
// r1.addNewDirection('north', r2);
// r2.addNewDirection('south', r1);
// r2.addNewDirection('north', r3);
// r3.addNewDirection('south', r2);
//
// export default [r1, r2, r3];

// Introduction
// Apartment Rooms
var bedroom = new Room({
  name: 'Bedroom',
  description: 'You are in your bedroom. The hallway is to the North.',
  directions: {north: hallway},
});
var hallway = new Room({
  name: 'Hallway',
  description: 'You are in a hallway. The kitchen is to the north, the computer room is to the east, the bedroom is to the south, and the front door is to the west.',
  directions: {
    south: bedroom,
    north: kitchen,
    east: computerRoom,
    // west: work--to work--can't access until gets snapple
  },
});
var kitchen = new Room({
  name: 'Kitchen',
  description: 'You have entered the kitchen with a fridge. The hallway is South.',
  directions: {
    south: hallway,
  },
  // inventory: [fridge]
});
var computerRoom = new Room({
  name: 'Computer Room',
  description: 'You have entered the computer room with a computer. The hallway is South.',
  directions: {
    south: hallway,
  },
  // inventory: [homeComputer]
});
// Work Rooms
var work = new Room({
  name: 'Work',
  description: 'You are at work. The boss\'s office is North, your work desk West, the front desk is South',
  directions: {
    north: bossOffice,
    west: workDesk,
    south: frontDesk,
  },
});
var bossOffice = new Room({
  name: 'Boss\'s Office',
  description: 'You are in your Boss\'s office. Your boss is at his desk. The main office is South',
  directions: {
    south: work,
  },
});
var workDesk = new Room({
  name: 'Work Desk',
  description: 'You are at your desk. There is a computer. The main office is South',
  directions: {
    south: work,
  },
  //inventory: [workComputer],
});
var frontDesk = new Room({
  name: 'Front Desk',
  description: 'You are at the front desk. A social worker is standing there. The main office is South.',
  directions: {
    south: work,
  }
});
// Part 2: Find Tree of Life Location
// Street
var mainStreet = new Room({
  name: 'Main Street',
  description: 'You are on a street. There is someone yelling on the street corner to your West. There is a market ' +
  'to the East and a piece of paper on the ground.',
  directions: {
    west: streetCorner,
    east: market,
  },
  //inventory: [flyer],
});
var streetCorner = new Room({
  name: 'West Street Corner',
  description: 'You are on the street corner. You see a disheveled person. The street is South.',
  directions: {
    south: mainStreet,
  }
});
var market = new Room({
  name: 'Street',
  description: 'You are in the market. You see a camera, and Snapples. The street is South.',
  directions: {
    south: mainStreet,
  },
  //inventory: [camera, Snapple],
});
// Part 3: Travel to Tree of Life
var lawStreet = new Room({
  name: 'Law Street',
  description: 'You are on Law Street. There is a map stand to the West and \"The Bar\" to the North.' +
  'There is a person with a dog walking towards you.',
  directions: {
    north: theBar,
    west: mapStand,
  },
});
var theBar = new Room({
  name: 'The Bar',
  description: 'You are in the \"The Bar\", a local hangout for lawyers. There is a lawyer sitting at a table. ' +
  'Law Street is South',
  directions: {
    south: lawStreet,
  }
});
var mapStand = new Room({
  name: 'Map Stand',
  description: 'You are at the Map Stand. There is a map. Law Street is South',
  directions: {
    south: lawStreet,
  },
  //inventory: [mapItem]
});

// Conclusion: TREE OF LIFE
var parkOlympus = new Room({
  name: 'Park Olympus',
  description: 'You are in Park Olympus. The Tree of Life is in front of you.',
  //inventory: [treeOfLife]
});
// Add directions
bedroom.addNewDirection('north', hallway);
//hallway directions
hallway.addNewDirection('south', bedroom);
hallway.addNewDirection('north', kitchen);
hallway.addNewDirection('east', computerRoom);
// work direction added after snapple item collected
//kitchen directions
kitchen.addNewDirection('south', hallway);
// computer room directions
computerRoom.addNewDirection('south', hallway);
// work directions
work.addNewDirection('north', bossOffice);
work.addNewDirection('west', workDesk);
work.addNewDirection('south', frontDesk);
// boss office
bossOffice.addNewDirection('south', work);
// work desk
workDesk.addNewDirection('south', work);
// front desk
frontDesk.addNewDirection('south', work);
// Main Street directions
mainStreet.addNewDirection('west', streetCorner);
mainStreet.addNewDirection('east', market);
// street corner
streetCorner.addNewDirection('south', mainStreet);
// market
market.addNewDirection('south', mainStreet);
// law street
lawStreet.addNewDirection('west', mapStand);
lawStreet.addNewDirection('north', theBar);
// map stand
mapStand.addNewDirection('south', lawStreet);
// The Bar
theBar.addNewDirection('south', lawStreet);
export default [bedroom, hallway, kitchen, computerRoom, workDesk, work, frontDesk, bossOffice, mainStreet,
  streetCorner, market, lawStreet, mapStand, theBar];