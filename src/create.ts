export const create = (type: string, properties: object) => [
	Object.assign(document.createElement(type), properties)
];
