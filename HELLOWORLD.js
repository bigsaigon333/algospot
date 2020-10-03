let [N, ...input] = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

N = Number(N);

for (let name of input) {
	console.log(`Hello, ${name}!`);
}
