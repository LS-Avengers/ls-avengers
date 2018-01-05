import GameObject from './gameObject.js';
import Person from './generics/person.js';

// moralFriend, Jerkface McGee, personWithDog, Boss2, Boss3, storeClerk (purchase snapples)
var moralFriend = new Person({
  name: 'still need to name Moral Friend',
  description: 'An idealistic, giving friend who strives for conversation and to help others',
  // revenue needed
  // needs status change based on rooms (either add to map or make function here)
  // wants to start conversations:
    // introduces self at front desk---before boss fight---can't
    // After first boss fight---wants to join up with Bob
});

var boss1 = new Person({
  name: 'Jerkface McGee',
  description: 'Bob\'s boss at pharma corp??. He\'s incompetent and therefore insecure.',
  // revenue needed
  // name of pharmaceutical company needed
});

var boss2 = new Person({
  name: 'Boss 2',
  description: 'You just bumped into him! He\'s very quick to anger and sues you for ASSAULT!',
  // revenue needed
});

var boss3 = new Person({
  name: 'Boss 3',
  description: '' // needs description
  //needs revenue
});

var villain = new Person({
  name: 'Super Boss',
  description: '', // needs description
  // needs revenue
});

var vagrant = new Person({
  name: 'Eccentric',
  description: 'Crazy cat person with a safeway cart is yelling at the sky. Maybe we should Listen',
  // action needed -- listen to eccentric's ramblings
  // trigger -- open direction to law street/part 3
});
export default [moralFriend, boss1, boss2, boss3, villain, vagrant]