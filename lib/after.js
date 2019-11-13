export const after = (subject) => (item) => {
    if (item instanceof Element || item instanceof Text) {
        item.after(subject);
        item.parentNode && item.parentNode.normalize();
    }
    return item;
};
