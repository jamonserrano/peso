export const on = (options = {}) => (listener) => (event) => (item) => {
    item.addEventListener(event, listener, options);
    return item;
};
