function sing() {
	// running singSong() will print DO RE MI, except on different lines
	console.log("DO");
	console.log("RE");
	console.log("MI");
}

function greet(firstName) {
	//writing greet(Elvis) will print out firstname is Elvis
	console.log(`firstName is: ${firstName}`);
	console.log("Hi!");
}

// code from exercise 36
function rant(message){
    for(let i = 0; i < 3; i++){
    message = message.toUpperCase()
    console.log(`${message}`);
    }
}
