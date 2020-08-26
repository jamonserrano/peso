export const removeListener = (options = {}) => (listener) => (event) => (item) => {
    item.removeEventListener(event, listener, options);
    return item;
};
