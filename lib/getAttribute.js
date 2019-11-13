export const getAttribute = (attribute) => (item) => item instanceof Element ? item.getAttribute(attribute) : null;
