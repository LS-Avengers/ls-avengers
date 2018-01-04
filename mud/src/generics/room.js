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
  addNewDirection(dname, room){
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
