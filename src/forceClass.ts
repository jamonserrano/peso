export const forceClass = (className: string) => (force?: boolean) => (item: Element) =>
	item.classList.toggle(className, force);