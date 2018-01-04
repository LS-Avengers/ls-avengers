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
		this.xpValue = options.xpValue;
	}
	
	goBankrupt = () => {
		this.bankrupt = true;
		console.log("Bankruptcy");
	}
}

class Player extends Person{
	constructor(options){
		super(options);
		this.xp = 0;
		this.level = 1;
		this.xpToNextLevel = 100;
	}
	
	pickup = (Item, Room) => {
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
	
	sue = (NPC) => {
		NPC.netWorth -= this.revenue;
		if(NPC.netWorth <= 0){
			NPC.bankrupt = true;
			this.xp += NPC.xpValue;
			if(this.xp >= this.xpToNextLevel){
				this.levelUp();
			}
		}
	}
	
	levelUp = () => {
		this.xp = this.xp % this.xpToNextLevel;
		this. xpToNextLevel = level*100;
		this.level++;
	}
	
	goBankrupt = () => {
		console.log("Chapter 11! You're bankrupt! Morally and financially.");
	}
}

winGame = () => {
	console.log("Player wins the game!");
}

export default { NPC, Person };