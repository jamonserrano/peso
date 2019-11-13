export const replaceWith = (subject) => (item) => {
    if (item instanceof Element || item instanceof Text) {
        item.replaceWith(subject);
    }
    return item;
};
