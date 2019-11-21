import { isElement } from "./isElement";

export const delegate = (listener: (event: Event) => any) => (
	selector: string
) => (e: Event) => {
	const target = e.target;
	isElement(target) && target.matches(selector) && listener.call(target, e);
};
