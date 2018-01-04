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
	}
}

class Player extends  Person{
	constructor(options){
		super(options);
		this.xp = 0;
		this.level = 1;
		this.xpToNextLevel = 100;
	}
	
	pickup = (Item, Room) => {
		switch(Item.name) {
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
			NPC.goBankrupt();
			this.xp += NPC.xpValue;
			if(this.xp >= this.xpToNextLevel){
				this.levelUp();
			}
		}
	}
	
	levelUp(){
		this.xp = this.xp % this.xpToNextLevel;
		this.xpToNextLevel *= 1.5;
		this.revenue += 2;
		this.level++;
		console.log(`You gained a level! You are now level {$this.level}`);
	}
	
	winGame = () => {
		console.log("You win! You monster.");
	}
	
	goBankrupt = () => {
		console.log("Chapter 11! You're bankrupt. Morally and financially.'");
	}
}

export default NPC, Person;