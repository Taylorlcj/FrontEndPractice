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
