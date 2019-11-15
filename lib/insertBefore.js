export const insertBefore = (target) => (item) => {
    if (target instanceof Element || target instanceof Text) {
        target.before(item);
        target.parentNode && target.parentNode.normalize();
    }
    return item;
};
