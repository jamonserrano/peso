export const delegate = (listener) => (selector) => (e) => {
    const target = e.target;
    target.matches(selector) && listener.call(target, e);
};
