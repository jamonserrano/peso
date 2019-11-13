export const setProperty = (property, value) => (item) => {
    item[property] = value;
    return item;
};
