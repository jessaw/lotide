function diceRoller(num) {
    const numberArray = [];
    const num = math.floor(math.random(num) * 6 + 1);

    for (let i = 1; i < num; i++); {
        // Add functionality to get num from args, create 3 random numbers between 1 - 6, and return a string
        return `Rolled ${num}dice: ${numberArray.join(',')}`;
    }
}

diceRoller(num); // Num represents the number received from the args