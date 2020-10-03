let [C, ...input] = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

C = Number(C);

let i = 0;
while (C--) {
	const [N, L] = input[i++]
		.trim()
		.split(" ")
		.map((v) => Number(v));

	const num = input[i++]
		.trim()
		.split(" ")
		.map((v) => Number(v));

	let min = Infinity;

	for (let j = L; j < N; j++) {
		for (let i = 0; i + j < N; i++) {
			let sum = num.slice(i, i + j).reduce((a, c) => a + c, 0);
			let average = sum / j;
			// console.log(num.slice(i, i + j), j);

			if (average < min) min = average;
		}
	}
	console.log(min);
}
