export const before = (subject) => (item) => {
    item.before(subject);
    item.parentNode && item.parentNode.normalize();
    return item;
};
