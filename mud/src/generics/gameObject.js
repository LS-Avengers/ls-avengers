class GameObject {
  constructor(options){
    this.name = options.name;
    this.description = options.description;
    this.inventory = [];
  }
}

export default GameObject;