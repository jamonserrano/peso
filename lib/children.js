export const children = (item) => {
    if (item instanceof Element ||
        item instanceof Document ||
        item instanceof DocumentFragment) {
        return [...item.children];
    }
    else {
        return [];
    }
};
