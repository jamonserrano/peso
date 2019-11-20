export const mockHTMLElement = (type = "div") => document.createElement(type);

export const mockSVGElement = () => document.createElement("g");

export const mockText = (text = "a") => document.createTextNode(text);

export const mockFragment = () => document.createDocumentFragment();

export const mockDocument = () => new Document();