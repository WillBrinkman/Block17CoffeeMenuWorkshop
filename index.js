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
const drinksUnderFiveArr = coffeeMenu.filter(drinksUnderFive)
// print array of drinks under five
console.table(drinksUnderFiveArr)

// 4. Print an Array of drinks that are priced at an even number
const EvenNumPricedDrinks = (drink) => {
    return drink.price%2 === 0
}

// use filter function to return even priced drinks, assign to variable
const evenPricedDrinks = coffeeMenu.filter(EvenNumPricedDrinks)

// print even priced drinks
console.table(evenPricedDrinks)

// 5. Print the total cost if you ordered one of ever menu item

const drinkPrices = (drink) => {
    return drink.price
}

const drinkPricesArr = coffeeMenu.map(drinkPrices)

const sumTotalCost = (accum, currentVal) => {
    return accum + currentVal
}

// Initialize totalCost variable with the 
const totalCost = drinkPricesArr.reduce(sumTotalCost);
console.log(`Ordering one of every item will cost $${totalCost}`)

// 6. Print an array with all the drinks that are seasonal.
// Check if drink is seasonal, return if true
const seasonalDrinks = (drink) => {
    return drink.seasonal
}

// filter coffeeMenu array using seasonalDrinks function
const seasonalDrinksArr = coffeeMenu.filter(seasonalDrinks)
// print modified array
console.table(seasonalDrinksArr)

// 7. Print all the seasonal drinks with the words "with imported beans" after the item name.
// For example: "affogato with imported beans".
// Build function to create a string with drink.name and the requested text

// const seasonalDrinkNames = (drink) => {
//    return drink.name +=  "with imported beans"
// }
//const seasonalDrinkNames = seasonalDrinksArr.map(drink => {
    //     return `${drink.name} with imported beans`;
    // });

// instead of modifying original coffeeMenu array with .forEach
const modifiedSeasonalDrinks = (drink) => {
    return {
        ...drink, // spread the original object to create a copy
        name: `${drink.name} with imported beans` 
    };
};
console.table(seasonalDrinksArr.map(modifiedSeasonalDrinks))
