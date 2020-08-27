export const set = (key: string) => (value: any) => (item: any) => {
	item[key] = value;
	
	return item;
};