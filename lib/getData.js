export const getData = (key) => (item) => item instanceof HTMLElement ? item.dataset[key] : null;
