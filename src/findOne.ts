export const findOne = (selector: string) => (
	item: Element | Document | DocumentFragment
) => item.querySelector(`:scope ${selector}`);
