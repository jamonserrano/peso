export const wrap = (value) => {
    if (value === null) {
        return [];
    }
    else if (typeof value[Symbol.iterator] === "function") {
        return [...value];
    }
    else {
        return [value];
    }
};
