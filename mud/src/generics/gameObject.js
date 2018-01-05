class GameObject {
  constructor(options){
    this.name = options.name;
    this.description = options.description || 'I\'m descriptionless';
    this.inventory = [];
    this.examine = this.examine.bind(this);
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
      actions: Object.keys(this.actions),
      inventory: this.inventory.map(item => item.name)
    };
    if (this.inventory.length > 0) retVal.inventory = this.inventory.map(item => item.name);
    return retVal;
  }
  addToActions(name, funct) {
    this.actions[name] = funct;
  }
}
export default GameObject;