//AND
const password = prompt("Enter your password");
if (password.length >= 6 && password.indexOf(" ") === -1) {
	console.log("VALID RESPONSE");
} else {
	console.log("Incorrect format for response");
}

//OR
const age = 99;
if ((age >= 0 && age < 5) || age >= 65) {
	console.log("free");
} else if (age >= 5 && age < 10) {
	console.log("$10");
} else if (age >= 10 && age < 65) {
	console.log("$20");
} else {
	console.log("Invalid age");
}

//NOT
const firstname = prompt("ENter your first name")
if(!firstName){
	console.log("You didnt write a first name")
}
