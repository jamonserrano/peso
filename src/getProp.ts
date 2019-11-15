import { Item } from "./types";

export const getProp = (prop: string) => (item: Item) => item[prop];
