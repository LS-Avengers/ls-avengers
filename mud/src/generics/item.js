import GameObject from "./gameObject.js";

class Item extends GameObject {
  constructor(options){
    super(options);
    this.canPickup = false;
    this.canMove  = false;
    this.canUse = false;
  }
  setProp(pname, property){
    this.[pname] = property;
  }
  getProp(pname){
    return this.[pname];
  }
}

export default Item;