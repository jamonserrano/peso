export const after = (subject) => (item) => {
    item.after(subject);
    item.parentNode && item.parentNode.normalize();
    return item;
};
