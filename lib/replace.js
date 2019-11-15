export const replace = (target) => (item) => {
    if (target instanceof Element || target instanceof Text) {
        const parentNode = target.parentNode;
        target.replaceWith(item);
        parentNode && parentNode.normalize();
    }
    return item;
};
