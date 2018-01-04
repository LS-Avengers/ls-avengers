class GameObject {
  constructor(options){
    this.name = options.name;
    this.description = options.description;
    this.inventory = options.inventory;
  }
}

class Room extends GameObject {
  constructor(options) {
    super(options);
    this.directions = options.directions || {};
    this.events = options.events || {};
    }

    canGo(direction) {
      return (Object.keys(this.directions).includes(direction));
    }
    addNewDIrection(dname, room){
      this.directions[dname] = room;
    }
    addNewEvent(ename, script){
      this.events[ename] = script;
    }
}

// var r1 = new Room({directions: {north: r2}});
// var r2 = new Room({directions: {north: r3, south: r1}});
// var r3 = new Room({directions: {south: r2}});

// console.log(r3.directions);