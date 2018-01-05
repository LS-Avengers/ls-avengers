import GameObject from './gameObject.js';

class Room extends GameObject {
  constructor(options) {
    super(options);
    this.directions = options.directions || {};
    this.events = options.events || {};

    this.examineRoom = this.examineRoom.bind(this);
    this.go = this.go.bind(this);
    this.canGo = this.canGo.bind(this);
    this.look = this.look.bind(this);
    this.addToActions('examine', this.examineRoom);
    this.addToActions('go', this.go);
    this.addToActions('look', this.look)
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
  go(direction, player) {
    if (this.canGo(direction)) {
      this.removeFromInventory(player);
      this.directions[direction].addToInventory(player);
      return this.directions[direction];
    }
    return false;
  }
  look(direction) {
    if (this.canGo(direction)) {
      return this.directions[direction].description;
    }
    return false;
  }
}

export default Room;
