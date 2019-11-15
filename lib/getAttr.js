export const getAttr = (attribute) => (item) => item instanceof Element ? item.getAttribute(attribute) : null;
