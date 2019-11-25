export const appendTo = (target) => (item) => {
    target.append(item);
    target.normalize();
    return item;
};
