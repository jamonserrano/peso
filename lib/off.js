export const off = (event, listener, options = {}) => (item) => {
    item.removeEventListener(event, listener, options);
    return item;
};
