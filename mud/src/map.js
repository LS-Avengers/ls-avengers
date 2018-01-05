import Room from './generics/room.js';
import itemList from './itemList.js';
import player from './App.js';

// Introduction
// Apartment Rooms
var bedroom = new Room({
  name: 'Bedroom',
  description: 'Bob awakens in his bedroom, it is a finely furnished room with only the nicest linens. You classy gentleman you. The door to your bedroom stands open and waiting for your exit.',
});

var hallway = new Room({
  name: 'Hallway',
  description: 'A narrow, dimly lit hallway because you never bothered to replace the light-bulbs',
});
var kitchen = new Room({
  name: 'Kitchen',
  description: 'In the kitchen you see a few cooking utensils and fridge. Maybe there is something inside.',
});

var computerRoom = new Room({
  name: 'Computer Room',
  description: 'Ahh the computer room, *shhh* it\'s sleeping.',
});
// Outside Rooms
var outside = new Room({
  name: 'Outside',
  description: 'You are outside. ',

});
// Work Rooms
var work = new Room({
  name: 'Work',
  description: 'You are at work in the Main Office. The Boss\'s Office is South, your Work Desk West, the Front Desk is North. Outside is East.',
});
var bossOffice = new Room({
  name: 'Boss\'s Office',
  description: 'You are in your Boss\'s Office. Your Boss sits at his desk.',
});
var workDesk = new Room({
  name: 'Work Desk',
  description: 'You are at your Work Desk. There is a Computer. The Main Office is East',
});
var frontDesk = new Room({
  name: 'Front Desk',
  description: 'You are at the Front Desk. A Social Worker is standing there. The Main Office is South.',
});
// Part 2: Find Tree of Life Location
// Street
var mainStreet = new Room({
  name: 'Main Street',
  description: 'You are on a Main Street. There is Someone yelling on the West Street Corner. There is a Market ' +
  'to the North. Law Street is East and a Piece of Paper on the ground. Outside of your home is South.',
});
var streetCorner = new Room({
  name: 'West Street Corner',
  description: 'You are on the West Street Corner. You see an Eccentric yelling. Main Street is East.',
  // see vagrant item in itemList
});
var market = new Room({
  name: 'Market',
  description: 'You are in the Market. You see a Camera, and Bottles of Snapple. The Main Street is South.',
});
// Part 3: Travel to Tree of Life
var lawStreet = new Room({
  name: 'Law Street',
  description: 'You are on Law Street. There is a map stand to the East and "The Bar" to the South.' +
  'Olympus Park is North. There is a person with a dog walking towards you.',
});
var theBar = new Room({
  name: 'The Bar',
  description: 'You are in the "The Bar", a local hangout for lawyers. There is a Lawyer sitting at a table. ' +
  'Law Street is North.',
});
var mapStand = new Room({
  name: 'Map Stand',
  description: 'You are at the Map Stand. There is a Map. Law Street is West',
});

// Conclusion: TREE OF LIFE
var parkOlympus = new Room({
  name: 'Park Olympus',
  description: 'You are in Park Olympus. The Tree of Life is in front of you.',
});

// COMBAT ROOM--inescable
var combatRoom = new Room({
  name: 'LAWSUIT!',
  description: "YOU ARE BEING SUED FOR...(add code for automating reason for suing)!!",
});


/* --------Add directions---------- */
// bedroom
bedroom.addNewDirection('north', hallway);
//hallway directions
hallway.addNewDirection('south', bedroom);
hallway.addNewDirection('west', kitchen);
hallway.addNewDirection('east', computerRoom);
// hallway.addNewDirection('north', outside);
// work direction added after snapple item collected
//kitchen directions
kitchen.addNewDirection('east', hallway);
// computer room directions
computerRoom.addNewDirection('west', hallway);
// outside
outside.addNewDirection('west', work);
outside.addNewDirection('north', mainStreet);
outside.addNewDirection('south', hallway);

// work directions
work.addNewDirection('south', bossOffice);
work.addNewDirection('west', workDesk);
work.addNewDirection('north', frontDesk);
work.addNewDirection('east', outside);
// boss office
bossOffice.addNewDirection('north', work);
// work desk
workDesk.addNewDirection('east', work);
// front desk
frontDesk.addNewDirection('south', work);
// Main Street directions
mainStreet.addNewDirection('west', streetCorner);
mainStreet.addNewDirection('north', market);
mainStreet.addNewDirection('south', outside);
mainStreet.addNewDirection('east', lawStreet);
// street corner
streetCorner.addNewDirection('east', mainStreet);
// market
market.addNewDirection('south', mainStreet);
// law street
lawStreet.addNewDirection('east', mapStand);
lawStreet.addNewDirection('north', parkOlympus);
lawStreet.addNewDirection('west', mainStreet);
lawStreet.addNewDirection('south', theBar);
// map stand
mapStand.addNewDirection('west', lawStreet);
// The Bar
theBar.addNewDirection('north', lawStreet);
// Olympus Park

/* -----Add Inventory----- */
// export default [fridge, snapple, homeComputer, workComputer, flyer, camera, mapItem, treeOfLife];
// add snapple to fridge
// add fridge with snapple to kitchen inventory
kitchen.addToInventory(itemList[0]);

// add computer to computer room
computerRoom.addToInventory(itemList[2]);
// computer to work desk
workDesk.addToInventory(itemList[3]);
// add flyer to main street
mainStreet.addToInventory(itemList[4]);
// add camera to market
market.addToInventory(itemList[5]);
// add map to map stand
mapStand.addToInventory(itemList[6]);
// add tree of life to olympus park
parkOlympus.addToInventory(itemList[7]);
// add snapples to market
market.addToInventory(itemList[8]);
/* -----Add People----- */
// moralFriend, Jerkface McGee, personWithDog, Boss2, Boss3, storeClerk (purchase snapples)

export default [bedroom, hallway, outside, kitchen, computerRoom, workDesk, work, frontDesk, bossOffice, mainStreet,
  streetCorner, market, lawStreet, mapStand, theBar];