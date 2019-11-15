export const replaceWith = (subject) => (item) => {
    if (item instanceof Element || item instanceof Text) {
        const parentNode = item.parentNode;
        item.replaceWith(subject);
        parentNode && parentNode.normalize();
    }
    return item;
};
