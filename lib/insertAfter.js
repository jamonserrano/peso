export const insertAfter = (target) => {
    if (target instanceof Element || target instanceof Text) {
        return (item) => {
            target.after(item);
            target.parentNode && target.parentNode.normalize();
            return item;
        };
    }
    else {
        return (item) => item;
    }
};
