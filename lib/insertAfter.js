export const insertAfter = (target) => (item) => {
    target.after(item);
    target.parentNode && target.parentNode.normalize();
    return item;
};
