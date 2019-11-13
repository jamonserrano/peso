export const before = (subject) => (item) => {
    if (item instanceof Element || item instanceof Text) {
        item.before(subject);
        item.parentNode && item.parentNode.normalize();
    }
    return item;
};
