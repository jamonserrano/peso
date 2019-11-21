export const off = (options = {}) => (listener) => (event) => (item) => {
    item.removeEventListener(event, listener, options);
    return item;
};
