import GameObject from "./gameObject.js";

class Item extends GameObject {
  constructor(options){
    super(options);
    this.canPickup = options.canPickup || false;
    this.hasInventory = options.hasInventory || false;

    this.drop = this.drop.bind(this);
    this.pickUp = this.pickUp.bind(this);
    this.addToActions('drop', this.drop);
    this.addToActions('get', this.pickUp);
  }
  toggleProp(property) {
    if (this.hasOwnProperty(property))
      this[property] = !this[property];
  }
  getProp(property) {
    return this[property];
  }
  pickUp(player, room) {
    if (this.canPickup) {
      player.addToInventory(this);
      room.removeFromInventory(this);
      return `you picked up ${this.name}.`;
    }
    return false;
  }
  drop(player, room) {
    if (this.canPickup) {
      room.addToInventory(this);
      player.removeFromInventory(this);
      return `you dropped ${this.name}.`
    }
  }
}

export default Item;