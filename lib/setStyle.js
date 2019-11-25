const toKebabCase = (str) => str.replace(/([A-Z])/g, match => `-${match.toLowerCase()}`);
export const setStyle = (rules) => (item) => {
    Object.entries(rules).forEach(([name, value]) => item.style.setProperty(toKebabCase(name), value));
    return item;
};
