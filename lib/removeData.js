export const removeData = (key) => (item) => {
    item instanceof HTMLElement && delete item.dataset[key];
    return item;
};
