export const toggleClass = (className) => (item) => {
    item.classList.toggle(className);
    return item;
};
