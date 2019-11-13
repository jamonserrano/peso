export const on = (event, listener, options = {}) => (item) => {
    item.addEventListener(event, listener, options);
    return item;
};
