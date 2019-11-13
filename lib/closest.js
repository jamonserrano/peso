export const closest = (selector) => (item) => {
    if (item instanceof Element) {
        return item.closest(selector);
    }
    else {
        return null;
    }
};
