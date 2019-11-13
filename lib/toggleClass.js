export const toggleClass = (className) => (item) => {
    item instanceof Element && item.classList.toggle(className);
    return item;
};
