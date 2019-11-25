export const setData = (data) => (item) => {
    Object.entries(data).forEach(([key, value]) => (item.dataset[key] = value));
    return item;
};
