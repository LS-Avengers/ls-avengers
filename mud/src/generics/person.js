import GameObject from './gameObject.js';

class Person extends GameObject {
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
// class Player extends Person{
//   constructor(options){
//     super(options);
//   }
// }

export default Person;