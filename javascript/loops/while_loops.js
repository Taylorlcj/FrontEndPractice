//repeats a number 10 times
let count = 0;
while (count < 10) {
	console.log(count);
	count++;
}

const secret_code = "BabyPanda";

//keeps going until the password is entered correctly
let guess = prompt("enter the secret code...");
while (guess !== secret_code) {
	guess = prompt("enter the secret code...");
}

// "break" stops the execution of the loop and code resumes afterward

let input = prompt("Hey, say something!");
while (true) {
	input = prompt(input);
	if (input.tolLowerCase() === "stop copying me") {
		break;
	}
}
console.log("0K YOU WIN!");
