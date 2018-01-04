class GameObject {
  constructor(options){
    this.name = options.name;
    this.description = options.description;
    this.inventory = [];
  }
  addToInventory(item) {
    this.inventory.push(item);
  }
  removeFromInventory(object) {
    this.inventory = this.inventory.filter(item => item.name !== object.name);
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

export default GameObject;