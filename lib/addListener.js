export const addListener = (options = {}) => (listener) => (event) => (item) => {
    item.addEventListener(event, listener, options);
    return item;
};
