export const remove = (item) => {
    const parentNode = item.parentNode;
    item.remove();
    parentNode && parentNode.normalize();
};
