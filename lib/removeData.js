export const removeData = (key) => (item) => {
    delete item.dataset[key];
    return item;
};
