for (let i = 0; i < 11; i++) {
	console.log(`i is: ${i}`);
	for (let j = 1; j < 4; j++) {
		console.log(`   j is ${j}`);
	}
}
const seatingChart = [
	["Kristen", "Erik", "Namita"],
	["Geoffrey", "Juanita‘", "Antonio", "Kevin"],
	["Yuma", "Sakura", "Jack", "Erika"],
];

//printing out all of seating chart
for (let i = 0; i < seatingChart.length; i++) {
	const row = seatingChart[i];
	console.log(`\nRow #${i + 1}`);
	for (let j = 0; j < row.length; j++) {
		console.log(row[j]);
	}
}
