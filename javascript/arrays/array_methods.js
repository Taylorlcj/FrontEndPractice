// Push - add to end
// Pop - remove from end
// Shift - remove from start
// Unshift - add to start

let movieLine = ["tom", "nancy", "pablo"];
console.log(movieLine);

movieLine.push("Oliver");
console.log(movieLine);

movieLine.pop();
console.log(movieLine);

let barbell = [];

barbell.push(45);
barbell.push(45);
barbell.push(85);
barbell.push(5);
barbell.push(65);
console.log(barbell);

let cinemaQueue = [];
cinemaQueue.push("Jenna", "Mary", "Jackson", "Holden");
console.log(cinemaQueue);

cinemaQueue.shift();
cinemaQueue.unshift("Dustin");
console.log(cinemaQueue);
