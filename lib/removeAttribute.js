export const removeAttribute = (attribute) => (item) => {
    item instanceof Element && item.removeAttribute(attribute);
    return item;
};
