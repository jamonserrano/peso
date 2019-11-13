export const insertBefore = (target) => {
    if (target instanceof Element || target instanceof Text) {
        return (item) => {
            target.before(item);
            target.parentNode && target.parentNode.normalize();
            return item;
        };
    }
    else {
        return (item) => item;
    }
};
