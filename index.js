const coffeeMenu = require('./coffee_data') 

// 2. Print array of all drinks on the menu
// Build function to select all drink names
const drinkNames = (drink) => {
    return drink.name
}
// Print drink names
console.log(coffeeMenu.map(drinkNames))

// 3. Print an array of drinks that cost 5 and under
// Create function to select drinks 5 and under

const drinksUnderFive = (drink) => {
    return drink.price <= 5
}

// Use filter function to print drinks that return true with drinksUnderFive function
console.log(JSON.stringify(coffeeMenu.filter(drinksUnderFive)))
console.table(coffeeMenu.filter(drinksUnderFive))

// 4. Print an Array of drinks that are priced at an even number
const EvenNumPricedDrinks = (drink) => {
    return drink.price%2 === 0
}

// use filter function to return even priced drinks, assign to variable
const evenPricedDrinks = coffeeMenu.filter(EvenNumPricedDrinks)

console.table(evenPricedDrinks)

// 5. Print the total cost if you ordered one of ever menu item

const drinkPrices = (drink) => {
    return drink.price
}

const drinkPricesArr = coffeeMenu.map(drinkPrices)

const sumTotalCost = (accum, currentVal) => {
    return accum + currentVal
}

const totalCost = drinkPricesArr.reduce(sumTotalCost);
console.log(`Ordering one of every item will cost $${totalCost}`)

// 6. Print an array with all the drinks that are seasonal.

const seasonalDrinks = (drink) => {
    return drink.seasonal
}

const seasonalDrinksArr = coffeeMenu.filter(seasonalDrinks)

console.table(seasonalDrinksArr)

// 7. Print all the seasonal drinks with the words "with imported beans" after the item name.
// For example: "affogato with imported beans".

