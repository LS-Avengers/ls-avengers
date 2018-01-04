import gameObject from './gameObject.js';

class Person extends gameObject{
	constructor(options){
		super(options);
		this.netWorth = options.netWorth;
		this.location = options.startLocation;
	}
}

class NPC extends Person{
	constructor(options){
		super(options);
		this.barks = options.barks;
	}
}

class Player extends  Person{
	constructor(options){
		super(options);
		this.
	}
}

export default NPC, Person;