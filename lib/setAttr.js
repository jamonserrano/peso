export const setAttr = (attribute, value) => (item) => {
    item instanceof Element && item.setAttribute(attribute, value);
    return item;
};
