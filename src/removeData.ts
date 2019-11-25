export const removeData = (key: string) => (item: HTMLElement) => {
	delete item.dataset[key];
	
	return item;
};
