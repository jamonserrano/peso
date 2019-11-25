export const getStyle = (name) => (item) => window.getComputedStyle(item).getPropertyValue(name);
