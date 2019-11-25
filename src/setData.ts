type Data = { [key: string]: any };

export const setData = (data: Data) => (item: HTMLElement) => {
	Object.entries(data).forEach(([key, value]) => (item.dataset[key] = value));

	return item;
};
