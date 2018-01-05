import Item from '../generics/item';

class SnappleBottle extends Item {
  constructor(options) {
    super();
  }
  open = () => {
    this.canUse = false;
    console.log("The snapple bottle opened");
    return "The tree of life exists";
  }
}

export default SnappleBottle;