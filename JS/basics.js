/*
basic primitive types:
Number
Boolean
String
null
undefined
NaN             //not a number but is considered a number by javascript
*/

// "**"" means raising it to the power (eg. 2**3 = 8)

//"let" allows you to change the value
let year = 1985;
let year2 = 15; // variables can have numbers but cannot be the first character

let mainYear = year + year2;

print(mainYear);

// "const" does not allow you to change the value or do any adjustments (eg. +=, --)
const luckyNumb = 3;

//"var" is the old way of making variables but there is no reason to use it now. Works similary to let
var runDistance = 26.2;

//Types can change!!!

//Number
let myNumber = 10; //can be decimal, integer, negative, positive, anything

//Boolean
let myBoolean = true; //must be lower case

//Strings
let userName = "Taylor"; //can use double OR single quotes
print(userName.length);

//you can add strings together
let laugh1 = "lol";
let laugh2 = "haha";
print(laugh1 + laugh2);

//methods (has to have "()" )
userName.toUpperCase();

let greeting = "        hello    ";
greeting.trim(); //only removes excess spaces

//String methods with arguments
let tvShow = "catdog";
tvShow.indexOf("cat"); //0
tvShow.indexOf("dog"); //3
tvShow.slice(0, 3); // "cat" (start, up until)

let annoyingLaugh = "haha that is so funny";
annoyingLaugh.replace("haha", "lolololololol"); //replaces all occurences of the first string with the second string
annoyingLaugh.repeat(2); //repeats twice

//template literals
let product = "Artichoke";
let price = 3.99;
price = 2.25;

let qty = 5;

//old way:(
print("“You bought " + qty + " " + product + "s. Total is: " + price * qty); // prints “You bought 5 Artichoke. Total is: 11.25"

//new way!!! (You have to use backticks, not quotes)
print(`you bought ${qty} {product}. Total is: ${price * qty}`); //prints “You bought 5 Artichoke. Total is: 11.25"

//Null

//Undefined