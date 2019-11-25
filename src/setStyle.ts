type Rules = { [name: string]: string };

const toKebabCase = (str: string) =>
	str.replace(/([A-Z])/g, match => `-${match.toLowerCase()}`);

export const setStyle = (rules: Rules) => (item: HTMLElement) => {
	Object.entries(rules).forEach(([name, value]) =>
		item.style.setProperty(toKebabCase(name), value)
	);

	return item;
};
