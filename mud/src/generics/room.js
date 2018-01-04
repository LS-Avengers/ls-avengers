import GameObject from './gameObject.js';

class Room extends GameObject {
  constructor(options) {
    super(options);
    this.directions = options.directions || {};
    this.events = options.events || {};
  }
  canGo(direction) {
    return Object.keys(this.directions).includes(direction);
  }
  addNewDIrection(dname, room){
    this.directions[dname] = room;
  }
  addNewEvent(ename, script){
    this.events[ename] = script;
  }
  examineRoom() {
    const retVal = this.examine();
    retVal.directions = Object.keys(this.directions);
    return retVal;
  }
}
export default Room;
// var r1 = new Room({directions: {north: r2}});
// var r2 = new Room({directions: {north: r3, south: r1}});
// var r3 = new Room({directions: {south: r2}});

// console.log(r3.directions);