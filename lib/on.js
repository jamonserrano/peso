export const on = (listener, options = {}) => (event) => (item) => {
    item.addEventListener(event, listener, options);
    return item;
};
