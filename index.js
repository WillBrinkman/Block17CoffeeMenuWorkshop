const coffeeMenu = require('./coffee_data') 

// 2. Print array of all drinks on the menu
// Build function to select all drink names
const drinkNames = (drink) => {
    return drink.name
}
// Print drink names
console.log(coffeeMenu.map(drinkNames))

// 3. Prui