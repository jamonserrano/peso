export const toggleClass = (className, force) => (item) => {
    item.classList.toggle(className, force);
    return item;
};
