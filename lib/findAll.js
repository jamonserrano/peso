export const findAll = (selector) => (item) => [...item.querySelectorAll(`:scope ${selector}`)];
