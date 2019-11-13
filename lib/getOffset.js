export const getOffset = (item) => item instanceof HTMLElement
    ? {
        left: item.offsetLeft,
        top: item.offsetTop
    }
    : null;
