export const element = (type, props) => {
    const el = document.createElement(type);
    Object.entries(props).forEach(([key, value]) => (el[key] = value));
    return el;
};
