class GameObject {
  constructor(options) {
    this.name = options.name;
    this.description = options.description || 'I\'m descriptionless';
    this.containedInventory = null,
    this.actions = {};

    this.examine = this.examine.bind(this);
    this.addToActions(['examine', 'ex', 'exam'], this.examine);
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
    if (typeof name === 'string') name = [name];
    if (!Array.isArray(name)) return false;
    if (typeof funct !== 'function') return false;

    for (let i = 0; i < name.length; i++) {
      this.actions[name[i]] = funct;
    }
  }
}

class Container extends GameObject {
  constructor(options) {
    super(options);
    this.inventory = [];
  }
  addToInventory(item) {
    item.containedInventory = this;
    this.inventory.push(item);
  }
  removeFromInventory(object) {
    object.containedInventory = null;
    this.inventory = this.inventory.filter(item => item.name !== object.name);
  }
}

class Item extends GameObject {
  constructor(options){
    super(options);
    this.canPickup = options.canPickup || false;

    this.drop = this.drop.bind(this);
    this.get = this.get.bind(this);
    this.addToActions('drop', this.drop);
    this.addToActions('get', this.get);
  }
  toggleProp(property) {
    if (this.hasOwnProperty(property))
      this[property] = !this[property];
  }
  getProp(property) {
    return this[property];
  }
  get(player, room) {
    console.log(this.containedInventory);
    if (this.canPickup && this.containedInventory !== player) {
      room.removeFromInventory(this);
      player.addToInventory(this);
      return `You picked up ${this.name}.`;
    }
    return false;
  }
  drop(player, room) {
    if (this.canPickup && this.containedInventory === player) {
      player.removeFromInventory(this);
      room.addToInventory(this);
      return `You dropped ${this.name}.`
    }
  }
}

class Room extends Container {
  constructor(options) {
    super(options);
    this.directions = options.directions || {};

    this.examineRoom = this.examineRoom.bind(this);
    this.go = this.go.bind(this);
    this.canGo = this.canGo.bind(this);
    this.look = this.look.bind(this);
    this.addToActions(['examine', 'ex', 'exam'], this.examineRoom);
    this.addToActions(['go', 'head', 'walk'], this.go);
    this.addToActions(['look', 'l'], this.look);
  }
  canGo(direction) {
    return Object.keys(this.directions).includes(direction);
  }
  addNewDirection(dname, room){
    this.directions[dname] = room;
  }
  examineRoom() {
    const retVal = this.examine();
    retVal.directions = Object.keys(this.directions);
    return retVal;
  }
  go(direction, player) {
    if (this.canGo(direction)) {
      this.containedInventory = this
      this.removeFromInventory(player);
      this.directions[direction].addToInventory(player);
      return this.directions[direction];
    }
    return false;
  }
  look(direction) {
    if (this.canGo(direction)) {
      return this.directions[direction].description;
    }
    return this.description;
  }
}

class Person extends Container{
  constructor(options) {
    super(options);
    this.netWorth = options.netWorth;
    this.revenue = options.revenue;
    this.bankrupt = false;

    this.sue = this.sue.bind(this);
    this.goBankrupt = this.goBankrupt(this);
    this.addToActions('sue', this.sue);
    this.addToActions('goBankrupt', this.goBankrupt);
  }
  sue(player) {
    this.netWorth -= player.revenue;
    player.netWorth -= this.revenue;
    if (this.netWorth < 0) this.goBankrupt();
  }
  goBankrupt() {}
}

// class NPC extends Person{
//   constructor(options) {
//     super(options);
//   }
// }
//
class Player extends Person{
  constructor(options){
    super(options);
  }
}

export {
  GameObject,
  Container,
  Item,
  Room,
  Person,
  Player
};