export const append = (subject) => (item) => {
    if (item instanceof Element ||
        item instanceof Document ||
        item instanceof DocumentFragment) {
        item.append(subject);
        item.normalize();
    }
    return item;
};
