class Item {
    name;
    weight;
    rarity;

constructor(name, weight, rarity) {
    this.name = name;
    this.weight = weight;
    this.rarity = rarity;   
}

getInfo() {
    return `Item: ${this.name}, Weight: ${this.weight}, Rarity: ${this.rarity}`;
}

setWeight(newWeight) {
    this.weight = newWeight;    
}

}




class Weapon extends Item {
    damage;
    durability = 100;

constructor(name, weight, rarity, damage) {
    super(name, weight, rarity);
    this.damage = damage;   
}
use() {
    if (this.durability > 0) {
        this.durability -= 10;
        console.log(`Used ${this.name}. Remaining durability: ${this.durability}`);
    } else {
        console.log(`${this.name} is broken and cannot be used.`);
    }
}

repair() {
    this.durability = 100;
    console.log(`${this.name} has been repaired to full durability.`);  
}

}


const sword = new Weapon("Excalibur", 5, "Legendary", 100);

console.log(sword.getInfo());

let i;
for (i = 0; i < 11; i++) {
sword.use();
}

sword.repair();