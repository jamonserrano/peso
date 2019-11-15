export const element = (type: string, props: { [key: string]: string }) => {
	const el = document.createElement(type);
	Object.entries(props).forEach(([key, value]) => (el[key] = value));
	return el;
};
