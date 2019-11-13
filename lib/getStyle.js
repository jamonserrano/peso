export const getStyle = (name) => (item) => item instanceof Element
    ? window.getComputedStyle(item).getPropertyValue(name)
    : null;
