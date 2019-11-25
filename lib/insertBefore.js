export const insertBefore = (target) => (item) => {
    target.before(item);
    target.parentNode && target.parentNode.normalize();
    return item;
};
