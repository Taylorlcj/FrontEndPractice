// person is the object
const person = { firstName: "Mick", lastName: "Jagger" };

//kitchenSink is the object
const kitchenSink = {
	favNum: 1111123123,
	isFunny: true,
	colors: ["red", "orange"],
};

//outputs the attributes of colors
console.log(kitchenSink["colors"]);

//also outputs the attributes of colors
console.log(kitchenSink.colors);

//1999 and 2020 in these usages are strings
const years = {
	1999: "Good",
	2020: "Bad",
};
