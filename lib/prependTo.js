export const prependTo = (target) => (item) => {
    if (target instanceof Element ||
        target instanceof Document ||
        target instanceof DocumentFragment) {
        target.prepend(item);
        target.normalize();
    }
    return item;
};
