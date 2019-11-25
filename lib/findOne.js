export const findOne = (selector) => (item) => item.querySelector(`:scope ${selector}`);
