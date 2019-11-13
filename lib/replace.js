export const replace = (target) => {
    if (target instanceof Element || target instanceof Text) {
        return (item) => {
            target.replaceWith(item);
            target.parentNode && target.parentNode.normalize();
            return item;
        };
    }
    else {
        return (item) => item;
    }
};
