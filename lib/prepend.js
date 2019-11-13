export const prepend = (subject) => (item) => {
    if (item instanceof Element ||
        item instanceof Document ||
        item instanceof DocumentFragment) {
        item.prepend(subject);
        item.normalize();
    }
    return item;
};
