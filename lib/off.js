export const off = (listener, options = {}) => (event) => (item) => {
    item.removeEventListener(event, listener, options);
    return item;
};
