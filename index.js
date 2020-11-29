// MATH.RANDOM()
//is a js method/function that return a floating-point, 
//pseudo-random number in a range from 0 to less than 1(inclusive of 0, but not 1) 
//It's userful for getting a random number quickly 

// MATH.FLOOR()

// CHALLENGE: Random choose an item from the pet shop for your dog
const shopItems = ['collar', 'bone','toys','biscuit']

let randomNumber = Math.random() * shopItems.length
console.log(randomNumber)
let newNumber = Math.floor(randomNumber)
console.log(newNumber)
let randomItem = shopItems[newNumber]
console.log(randomItem)