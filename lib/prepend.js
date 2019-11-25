export const prepend = (subject) => (item) => {
    item.prepend(subject);
    item.normalize();
    return item;
};
