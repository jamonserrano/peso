export const append = (subject) => (item) => {
    item.append(subject);
    item.normalize();
    return item;
};
