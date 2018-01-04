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
}

export default gameObject;