let rand = Math.random();
if (rand < 0.5) {
	console.log("Your number is less than 0.5!");
	console.log(rand);
}

if (rand >= 0.5) {
	console.log("Your number is greater or equal to than 0.5!");
	console.log(rand);
}
// ELSE IF
const age = 8;

if (age < 5) {
	console.log("You are a baby, you get in for free");
} else if (age < 10) {
	console.log("You are a child, you pay 10 dollars");
} else if (age < 65) {
	console.log("You are an adult, you pay 8000 dollars");
}

//ELSE(If nothing else is true, do this)
const dayOfWeek = prompt("Enter a day:").toLowerCase();

if (dayOfWeek === "monday") {
	console.log("UGH I HATE MONDAYS");
} else if (dayOfWeek === "saturday") {
	console.log();
} else if (dayOfWeek === "friday") {
	console.log("Fridays are decent");
} else {
	console.log("Meh");
}

//NESTING CONDITIONALS
const password = prompt("please enter a new password");

// Password must be 6+ characters
if (password.length >= 6) {
	console.log("long enough password");
} else {
	console.log("Password too short! Must be 6+ characters");
}

//Password cannot include space

if (password.indexOf(" ") === -1) {
	console.log("You have no spaces, good job");
} else {
	console.log("Passwords cannot have spaces");
}

//Truthy Falsey

// const userInput = prompt("Enter Something");

// if (userInput) {
// 	console.log("TRUTHY");
// } else {
// 	console.log("FALSEY");
// }
