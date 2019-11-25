export const replace = (target) => (item) => {
    const parentNode = target.parentNode;
    target.replaceWith(item);
    parentNode && parentNode.normalize();
    return item;
};
