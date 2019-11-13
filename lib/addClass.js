export const addClass = (className) => (item) => {
    item instanceof Element && item.classList.add(className);
    return item;
};
