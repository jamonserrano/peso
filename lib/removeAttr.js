export const removeAttr = (attribute) => (item) => {
    item.removeAttribute(attribute);
    return item;
};
