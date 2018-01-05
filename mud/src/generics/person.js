import GameObject from './gameObject.js';

class Person extends GameObject{
	constructor(options){
		super(options);
		this.netWorth = options.netWorth;
		this.revenue = options.revenue;
		this.bankrupt = false;
	}
}

class NPC extends Person{
	constructor(options){
		super(options);
		this.goBankrupt = () => {};
	}
}

class Player extends  Person{
	constructor(options){
		super(options);
	}
	sue(NPC) {
		NPC.netWorth -= this.revenue;
		if(NPC.netWorth <= 0){
			NPC.bankrupt = true;
		}
	}
	goBankrupt() {
		console.log("Chapter 11!");
	}
}

export { NPC, Person, Player };