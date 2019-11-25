export const findAll = (selector: string) => (
	item: Element | Document | DocumentFragment
) => [...item.querySelectorAll(`:scope ${selector}`)];
