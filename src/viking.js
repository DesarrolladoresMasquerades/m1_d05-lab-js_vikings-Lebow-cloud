// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health || 1;
    this.strength = strength || 0;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name || '';
  }

  battleCry() {
    return 'Odin Owns You All!';
  }

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0)
      return `${this.name} has received ${damage} points of damage`;
    return `${this.name} has died in act of combat`;
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0)
      return `A Saxon has received ${damage} points of damage`;
    return 'A Saxon has died in combat';
  }

  attack() {
    return this.strength;
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(viking) {
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
    
  }

  vikingAttack() {

    const saxonIndex = Math.floor(Math.random())*this.saxonArmy.length
    const vikingIndex = Math.floor(Math.random())*this.vikingArmy.length

    const randomSaxon = this.saxonArmy[saxonIndex]
    const randomViking = this.vikingArmy[saxonIndex]

    let muerteSaxon = randomSaxon.receiveDamage(randomViking.strength)

    if(randomSaxon.health <= 0) this.saxonArmy.splice(saxonIndex,1)

   return muerteSaxon

  }

  saxonAttack() {

    const saxonIndex = Math.floor(Math.random())*this.saxonArmy.length
    const vikingIndex = Math.floor(Math.random())*this.vikingArmy.length

    const randomSaxon = this.saxonArmy[saxonIndex]
    const randomViking = this.vikingArmy[saxonIndex]

    let muerteViking = randomViking.receiveDamage(randomSaxon.strength)

   if(randomViking.health <= 0)this.vikingArmy.splice(saxonIndex,1)

   return muerteViking

  }

  showStatus() {
    
    if(!this.saxonArmy.length) return "Vikings have won the war of the century!"
    if(!this.vikingArmy.length) return "Saxons have fought for their lives and survived another day..."
    else return "Vikings and Saxons are still in the thick of battle."

  }

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
