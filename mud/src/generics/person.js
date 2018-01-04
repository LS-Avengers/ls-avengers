import gameObject from './gameObject.js';

class Person extends gameObject{
	constructor(options){
		super(options);
		this.netWorth = options.netWorth;
		this.inventory = options.inventory;
		this.revenue = options.revenue;
		this.bankrupt = false;
	}
}

class NPC extends Person{
	constructor(options){
		super(options);
	}
	this.goBankrupt = () => {
		
	}
}

class Player extends  Person{
	constructor(options){
		super(options);
	}
	
	this.pickup = (Item, Room) => {
		switch(Item.type) {
			case 'tree':
				Player.winGame();
				break;
			case 'money':
				this.revenue += Item.quantity;
				break;
			default:
				inventory.push(Item);
				break;
		}
		Room.removeFromInventory(Item);
	}
	this.sue = (NPC) => {
		NPC.netWorth -= this.revenue;
		if(NPC.netWorth <= 0){
			NPC.bankrupt = true;
		}
	}
	this.goBankrupt = () => {
		console.log("Chapter 11!");
	}
}

export default NPC, Person;