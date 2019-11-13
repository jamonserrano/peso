export const delegate = (listener, selector) => (e) => {
    const target = e.target;
    if (target instanceof Element && target.matches(selector)) {
        listener.call(target, e);
    }
};
