export const removeClass = (className) => (item) => {
    item instanceof Element && item.classList.remove(className);
    return item;
};
