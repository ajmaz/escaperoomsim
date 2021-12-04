const xyz = require('readline-sync');
const playerName = xyz.question("What is your name? ");

console.log(`${playerName}, "Welcome to the Escape Room Simulation!`);

let isAlive = true;
let hasKey = false;

while (isAlive == true) {
    menuId = xyz.keyIn(' Press 1 to Put hand in hole, Press 2 to find the key, or, Press 3 to open door', { limit: '$<1-3>' });
    if (menuId == 1) {
        console.log(`${playerName} you put hand in the hole. GAME OVER!`)
        isAlive = false;
    }
    else if (menuId == 2 && hasKey == false) {
        console.log(`${playerName}, you have found the key, proceed to opening the door.`);
        hasKey = true;
    }
    else if (menuId == 2 && hasKey == true) {
        console.log(`${playerName}, you've already found the key, YOU'RE WASTING TIME! GO TO THE DOOR!`)
    }
    else if (menuId == 3 && hasKey == false) {
        console.log(`${playerName}, you cannot open the door without finding the key first!`)
    }
    else if (menuId == 3 && hasKey == true) {
        console.log(`${playerName}, you have escaped succeffully, job well done!`)
        isAlive = false
    }
}


