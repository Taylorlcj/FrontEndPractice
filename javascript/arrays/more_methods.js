// concat - merge arrays
// includes - look for a value  (returns true or false)
// indexOf - just like string.indexOf
// join - creates a string from an array
// reverse - reverses an array
// slice - copies a portion on an array
// splice - removes/replaces elements
// sort - sorts an array

let cats = ["Blue", "kitty"];
let dogs = ["rusty", "wyatt"];

let combo = cats.concat(dogs); //combines them at that time, doesnt keep them combined
console.log(combo);

console.log(cats.includes("cats"));

console.log(combo.indexOf("rusty"));
console.log(combo.indexOf("blue")); //returns -1 because not capitalized properly
console.log(combo.indexOf("Blue")); //There ya go

combo.reverse(); //reorganizes the array permanently
console.log(combo);

let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
let coolColors = colors.slice(3); //from index 3 onwards
console.log(coolColors);

let warmColors = colors.slice(0, 3); //stores from index 0 up until 3(not including 3)
console.log(warmColors);

let lastThree = colors.slice(-3); //stores the last 3
console.log(lastThree);

