declare type Attributes = {
    [attribute: string]: string;
};
export declare const setAttr: (attributes: Attributes) => (item: Element) => Element;
export {};
