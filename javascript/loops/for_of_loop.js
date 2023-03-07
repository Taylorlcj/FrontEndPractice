const subreddits = ["cringe", "books", "chickens", "funny", "pics", "soccer"];
for (let i = 0; i < subreddits.length; i++) {
	console.log(`Visit reddit.com/r/${subreddits[i]}`);
}

console.log("\nBelow are the for of variants!\n");
//this the a for...of
for (let sub of subreddits) {
	console.log(`Visit reddit.com/r/${sub}`);
}
