export const qs = (selector) => {
    const item = document.querySelector(selector);
    return item ? [item] : [];
};
