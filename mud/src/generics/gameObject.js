class GameObject {
  constructor(options){
    this.name = options.name;
    this.description = options.description;
    this.inventory = [];
    this.actions = {
      examine: this.examine,
    };
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
  addToActions(name, funct) {
    this.actions[name] = funct;
  }
}
export default GameObject;