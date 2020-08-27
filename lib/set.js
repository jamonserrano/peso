export const set = (key) => (value) => (item) => {
    item[key] = value;
    return item;
};
