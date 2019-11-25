export const removeClass = (className) => (item) => {
    item.classList.remove(...className.split(" "));
    return item;
};
