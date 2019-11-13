export const unwrap = (collectionOrItem) => Array.isArray(collectionOrItem)
    ? unwrap(collectionOrItem[0])
    : collectionOrItem;
