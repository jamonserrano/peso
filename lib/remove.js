export const remove = (item) => {
    if (item instanceof Element || item instanceof Text) {
        const parentNode = item.parentNode;
        item.remove();
        parentNode && parentNode.normalize();
    }
};
