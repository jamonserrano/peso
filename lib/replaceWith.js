export const replaceWith = (subject) => (item) => {
    const parentNode = item.parentNode;
    item.replaceWith(subject);
    parentNode && parentNode.normalize();
    return item;
};
