import GameObject from "./gameObject.js";

class Item extends GameObject {
  constructor(options){
    super(options);
    this.canPickup = options.canPickup || false;
    this.hasInventory = options.hasInventory || false;
  }
  setProp(property, value) {
    this[property] = value;
  }
  getProp(property) {
    return this[property];
  }
}

export default Item;