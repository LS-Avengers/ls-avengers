import Item from '../generics/item';

class SnappleBottle extends Item {
  constructor(options) {
    super();
  }
  capLid = () => {
    this.canUse = true;
    console.log("The tree of life exists!");
  }
}

export default SnappleBottle;