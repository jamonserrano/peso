export const removeAttr = (attribute) => (item) => {
    item instanceof Element && item.removeAttribute(attribute);
    return item;
};
