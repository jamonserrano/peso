export const appendTo = (target) => (item) => {
    if (target instanceof Element ||
        target instanceof Document ||
        target instanceof DocumentFragment) {
        target.append(item);
        target.normalize();
    }
    return item;
};
