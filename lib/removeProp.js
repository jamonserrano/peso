export const removeProp = (property) => (item) => {
    delete item[property];
    return item;
};
