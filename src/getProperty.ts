import { Item } from "./types";

export const getProperty = (property: string) => (item: Item) => item[property];
