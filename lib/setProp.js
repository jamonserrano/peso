export const setProp = (property, value) => (item) => {
    item[property] = value;
    return item;
};
