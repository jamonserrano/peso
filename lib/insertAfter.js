export const insertAfter = (target) => (item) => {
    if (target instanceof Element || target instanceof Text) {
        target.after(item);
        target.parentNode && target.parentNode.normalize();
    }
    return item;
};
