export const setAttribute = (attribute, value) => (item) => {
    item instanceof Element && item.setAttribute(attribute, value);
    return item;
};
