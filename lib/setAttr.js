export const setAttr = (attributes) => (item) => {
    Object.entries(attributes).forEach(([attribute, value]) => item.setAttribute(attribute, value));
    return item;
};
