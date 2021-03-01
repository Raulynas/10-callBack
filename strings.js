const first = text => text[0];
const last = text => text[text.length - 1];

const letter = (text, position) => {
	console.log(position(text));
};

letter('labas', first);
letter('labas', last);
