export const appendTo = (target) => {
    if (target instanceof Element ||
        target instanceof Document ||
        target instanceof DocumentFragment) {
        return (item) => {
            target.append(item);
            target.normalize();
            return item;
        };
    }
    else {
        return (item) => item;
    }
};
