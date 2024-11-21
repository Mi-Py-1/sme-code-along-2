let hero = {
    name: "Spider-man",
    health: 100,
    alias: "Peter Parker",
    movementSpeed: 5,
    isAlive: true,
    attacks: [
        ["web shooter", 10],
        ["punch", 2],
        ["swing kick", 5],
    ],

    attack() {
        let rand = Math.floor(Math.random() * this.attacks.length);
        return this.attacks[rand];
    }
}

let villain = {
    name: "Doctor Octopus",
    health: 100,
    alias: "Otto Octavius",
    movementSpeed: 5,
    isAlive: true,
    attacks: [
        ["leg strike", 10],
        ["punch", 2],
        ["leg choke", 5],
    ],

    attack() {
        let rand = Math.floor(Math.random() * this.attacks.length);
        return this.attacks[rand];
    }
}

function fight(hero, villain) {
    while (hero.isAlive && villain.isAlive) {
        let heroAttack = hero.attack();
        console.log(`${hero.name} attacked with ${heroAttack[0]} for ${heroAttack[1]} damage!`);
        villain.health -= heroAttack[1];

        let villainAttack = villain.attack();
        console.log(`${villain.name} attacked with ${villainAttack[0]} for ${villainAttack[1]} damage!`);
        hero.health -= villainAttack[1];



        if (hero.health <= 0) {
            hero.isAlive = false;
            console.log(`${hero.name} has been defeated!`);
        } else if (villain.health <= 0) {
            villain.isAlive = false;
            console.log(`${villain.name} has been defeated!`);
        }
    }
}

fight(hero, villain);
