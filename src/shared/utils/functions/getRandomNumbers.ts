export function getRandomNumbers(min: number, max: number, amount = 1) {
	math.randomseed(tick());

	const numbers = new Array<number>();
	for (let i = 0; i < amount; i++) {
		const num = math.floor(math.random() * max) + min;
		if (numbers.includes(num)) {
			i--;
			continue;
		}
		numbers.push(num);
	}

	return numbers;
}
