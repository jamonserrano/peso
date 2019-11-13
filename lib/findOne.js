export const findOne = (selector) => (item) => {
    if (item instanceof Element) {
        const originalId = item.id;
        const didNotHaveId = !originalId;
        const id = originalId || "peso-temp-id";
        didNotHaveId && item.setAttribute("id", id);
        const result = item.querySelector(`#${id} ${selector}`);
        didNotHaveId && item.removeAttribute("id");
        return result;
    }
    else if (item instanceof Document || item instanceof DocumentFragment) {
        return item.querySelector(selector);
    }
};
