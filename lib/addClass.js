export const addClass = (className) => (item) => {
    item.classList.add(...className.split(" "));
    return item;
};
