class GameObject {
  constructor(options){
    this.name = options.name;
    this.description = options.description;
    this.inventory = [];
  }
  addToInventory(item) {
    this.inventory.push(item);
  }
  removeFromInventory(name) {
    this.inventory = this.inventory.filter(item => item.name !== name);
  }
  examine() {
    const retVal = {
      name: this.name,
      description: this.description,
    };
    if (this.inventory.length > 0) retVal.inventory = this.inventory;
    return retVal;
  }
}

export default gameObject;