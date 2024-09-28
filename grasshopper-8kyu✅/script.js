'use strict';

let log = [];
class Hero {
  constructor(name = 'Hero') {
    this.name = name;
    this.experience = 0;
    this.health = 100;
    this.position = 0;
    this.damage = 5;
    this.dead = false;
  }
  move() {
    const dice = Math.trunc(Math.random() * 6) + 1;
    this.position += dice * 2;
    console.log(`Rolled: ${dice}. Hero moved to ${this.position}`);
    log.push(`Move:Rolled: ${dice}. Hero moved to ${this.position}`);
  }
  fight(damage) {
    console.log(`Fighting with ${this.health} HP & ${this.damage} ATT`);
    this.health -= damage;
    if (this.health <= 0) this.dead = true;
    console.log(`Result: ${this.health} HP left, got dealt ${damage} DMG`);
    log.push(`Fight:Result: ${this.health} HP left, got dealt ${damage} DMG`);
  }
}
const hero = new Hero();
let takenDamages;

document.addEventListener('keydown', function (event) {
  if (event.key === 'd' && !Hero.dead) {
    hero.move();
  }
});
document.addEventListener('keydown', function (event) {
  if (event.key === ' ' && !Hero.dead) {
    hero.fight(takenDamages);
  }
});
