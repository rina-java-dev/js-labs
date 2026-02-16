function Item(name, weight, rarity) {
    this.name = name;
    this.weight = weight;
    this.rarity = rarity;
    
    this.getInfo = function() {
        return `Item: ${this.name}, Weight: ${this.weight}, Rarity: ${this.rarity}`;
    }
    
    this.setWeight = function(newWeight) {
        this.weight = newWeight;    
    }
}

function Weapon(name, weight, rarity, damage, durability) {
    Item.call(this, name, weight, rarity);
    this.damage = damage;
    this.durability = durability;
    
    this.use = function() {
        if (this.durability > 0) {
            this.durability -= 10;
            console.log(`Used ${this.name}. Remaining durability: ${this.durability}`);
        } else {
            console.log(`${this.name} is broken and cannot be used.`);
        }
    }
    
    this.repair = function() {
        this.durability = 100;
        console.log(`${this.name} has been repaired to full durability.`);  
    }
}

const sword = new Weapon("Excalibur", 5, "Legendary", 100, 100);

console.log(sword.getInfo());

let i;
for (i = 0; i < 11; i++) {
    sword.use();
}

sword.repair();