export const qs = (selector: string) => {
	const item = document.querySelector(selector);

	return item ? [item] : [];
}

