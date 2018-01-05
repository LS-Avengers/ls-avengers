import GameObject from "./gameObject.js";

class Item extends GameObject {
  constructor(options){
    super();
    this.canPickup = options.canPickup;
    this.canMove = options.canMove;
    this.canUse = options.canUse;
  }
}

export default Item;