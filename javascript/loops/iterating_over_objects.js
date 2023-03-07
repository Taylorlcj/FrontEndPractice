//use for in when iterating over an object(rare)

const testScores = {
	marion: 72,
	dwayne: 77,
	nadia: 83,
	elvira: 97,
	diedre: 81,
	vonnie: 60,
};

// for (let person in testScones) {
// console. log( '${person} scored ${testScores[person]}’);

//use this instead of for in
let total = 0;
let scores = Object.values(testScores);
for (let score of scores) {
	total += score;
}
console.log(total / scores.length);
