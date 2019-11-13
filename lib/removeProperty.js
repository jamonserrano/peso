export const removeProperty = (property) => (item) => {
    delete item[property];
    return item;
};
