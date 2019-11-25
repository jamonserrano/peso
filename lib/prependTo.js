export const prependTo = (target) => (item) => {
    target.prepend(item);
    target.normalize();
    return item;
};
