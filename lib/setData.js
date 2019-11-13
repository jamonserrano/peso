export const setData = (key, value) => (item) => {
    if (item instanceof HTMLElement) {
        item.dataset[key] = value;
    }
    return item;
};
