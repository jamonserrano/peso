export const prependTo = (target) => {
    if (target instanceof Element ||
        target instanceof Document ||
        target instanceof DocumentFragment) {
        return (item) => {
            target.prepend(item);
            target.normalize();
            return item;
        };
    }
    else {
        return (item) => item;
    }
};
