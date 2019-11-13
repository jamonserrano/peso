export const measure = (item) => {
    if (item instanceof Element) {
        return item.getBoundingClientRect();
    }
    else {
        return null;
    }
};
