// Converts a string to title case "This Is A Title Case Example"
export function toTitleCase(str: string) {
	const split = str.split(" ");

	split.forEach((word, i) => {
		const firstLetter = word.sub(1, 1);
		const theRest = word.sub(2);
		split[i] = firstLetter.upper() + theRest;
	});

	const result = split.join(" ");
	return result;
}
