const plius = (a, b) => a + b;
const minus = (a, b) => a - b;
const mult = (a, b) => a * b;
const dev = (a, b) => a / b;

const calc = (first, operator, second) => {
	const rez = operator(first, second);
	console.log(rez);
};
calc(8, plius, 5);
calc(8, minus, 5);
calc(8, mult, 5);
calc(8, dev, 5);
