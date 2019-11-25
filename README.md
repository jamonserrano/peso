# peso
> Lodash for the DOM

Peso is a collection of composable functions for easy DOM manipulation. These functions are simple wrappers around the native DOM APIs to facilitate a functional programming style and they work seamlessly with lodash.

# Installation

```sh
# with npm
npm install peso --save

# with yarn
yarn add peso
```

# Usage

The preferred way to use peso in your project is to import only the functions that are needed.

```js
import { $, addClass } from "peso";
```

Or you can import all functions at once.

```js
import * as peso from "peso";

// every function is available under peso, e.g.
// peso.$, peso.addClass
```

# Functions

## $ (alias: qs)
> `$(selector)`

Returns the first element matching the selector string. The result can then be passed to other peso functions as the last parameter.

### Arguments
1. selector (string) - the selector string to match

### Returns
The first element matched by the selector

### Examples

```js
const body = $("body");

const firstSelectedItem = $("li.selected");
```

## $$ (alias: qsa)
> `$$(selector)`

Returns an array containing all elements matching the selector string. The result can then be mapped through other peso functions. See TODO

### Arguments
1. selector (string) - the selector string to match

### Returns
An array containing all elements matched by the selector

### Examples

```js
const allSelectedItems = $$("li.selected");
```

## addClass
> `addClass(className)(item)`

Adds the specified class name(s) to the element.

### Arguments
1. className: `string` – the class name(s) to add

2. item: `Element` – the target element

### Returns
`Element | Text | Document | DocumentFragment` - the item

### Examples

#### Single element

```js
const select = addClass("selected");
const item = $("li");

select(item);
```

#### Collection

```js
const select = addClass("selected");
const allItems = $$("li");

allItems.map(select);
```

#### Multiple class names

```js
import { $, addClass } from "peso";

const selectAndHighlight = addClass("selected highlighted");
const item = $("li");

selectAndHighlight(item);
```

## after

> `after(subject)(item)`

Inserts the subject after the item.

### Arguments

1. subject: `Element | Text | DocumentFragment | string` – the subject to insert after the item

2. item: `Element | Text` - the item 

### Returns
`Element | Text` - the item

### Examples


## append

> `append(subject)(item)`

Appends the subject as the last child of the item.

### Arguments

1. subject: `Element | Text | DocumentFragment | string` – the subject to append to the item

2. item: `Element | Text | Document | DocumentFragment` - the item 

### Returns
`Element | Text| Document | DocumentFragment` - the item

### Examples


## appendTo

> `appendTo(target)(item)`

Appends the item as the last child of the target.

### Arguments
1. target: `Element | Document | DocumentFragment` – the target to append the item to

2. item: `Element | Text | DocumentFragment | string` - the item 

### Returns
`Element | Text | DocumentFragment | string` - the item

### Examples


## before

> `before(subject)(item)`

Inserts the subject before the item.

### Arguments

1. subject: `Element | Text | DocumentFragment | string` – the subject to insert before the item

2. item: `Element | Text` - the item 

### Returns
`Element | Text ` - the item

### Examples


## children

> `children(item)`

Returns the child elements of the item.

### Arguments
1. item: `Element | Document | DocumentFragment`

### Returns
`Element[]` - the children of the item

### Examples


## clone

> `clone(deep)(item)`

Clones the item.

### Arguments

1. deep: `boolean` - perform a deep clone (default: false)

2. item: `Element | Text | Document | DocumentFragment` - the item

### Returns

`Element | Text | Document | DocumentFragment` - the clone of the item

### Examples


## closest

> `closest(selector)(item)`

Returns the closest ancestor of the item that matches the selector.

### Arguments
1. selector: `string` - the selector string
2. item: `Element`

### Returns
`Element | null` - the ancestor
### Examples


## delegate

> `delegate(listener)(selector)`

Delegates an event listener for descendant elements that match the selector. 

### Arguments
1. listener: `(e: Event) => void` - the event listener function to delegate
2. selector: `string` - the selector that the descendant elements need to match to trigger the listener

### Returns
`(e: Event) => void` - the delegated event listener function

### Examples


## element

> `element(type)`

Creates a new HTML element.

### Arguments
1. type: `string` - the type of the element

### Returns
2. `Element` the created element

### Examples


## findAll

> `findAll(selector)(item)`

Finds all descendants that match the selector.

### Arguments
1. selector: `string` - the selector to match
2. item: `Element | Document | DocumentFragment` - the item

### Returns
`Element[]` - the matched descendants

### Examples


## findOne

> `findOne(selector)(item)`

Finds the first descendant that matches the selector.

### Arguments
1. selector: `string` - the selector to match
2. item: `Element | Document | DocumentFragment` - the item

### Returns
`Element | null` - the match

### Examples


## fragment

> `fragment()`

Creates a new document fragment.

### Returns
`DocumentFragment` - the new document fragment

### Examples


## getAttr

> `getAttr(attributeName)(item)`

Gets the specified attribute of the item.

### Arguments
1. attributeName: `string` - the name of the attribute
2. item: `Element` - the item

### Returns
`string` - the value of the attribute

### Examples


## getData

> `getData(key)(item)`

Gets the specified data-attribute of the item.

### Arguments
1. key: `string` - the key of the data-attribute
2. `HTMLElement` - the item

### Returns
`string` - the value of the data-attribute

### Examples


## getStyle

> `getStyle(name)(item)`

Gets the specified style of the item

### Arguments
1. name: `string` - the name of the style rule
2. item: `Element` - the item

### Returns
`string` - the value of the style rule

### Examples


## hasClass

> `hasClass(className)(item)`

Determine if the class name is assigned to the item.

### Arguments
1. className: `string` - the class name
2. item: `Element` - the item

### Returns
`boolean`

### Examples


## insertAfter

> `insertAfter(target)(item)`

Inserts the item after the target element.

### Arguments
1. target: `Element | Text` - the target
2. item: `Element | Text | DocumentFragment` - the item

### Returns
`Element | Text | DocumentFragment` - the item

### Examples


## insertBefore

> `insertBefore(target)(item)`

Inserts the item before the target element.

### Arguments
1. target: `Element | Text` - the target
2. item: `Element | Text | DocumentFragment` - the item

### Returns
`Element | Text | DocumentFragment` - the item

### Examples


## isDocument

> `isDocument(item)`

Determines if the item is a Document.

### Arguments
1. item: `any` - the item

### Returns
`boolean`

### Examples


## isElement

> `isElement(item)`

Determines if the item is an Element.

### Arguments
1. item: `any` - the item

### Returns
`boolean`

### Examples


## isFragment

> `isFragment(item)`

Determines if the item is a document fragment.

### Arguments
1. item: `any` - the item

### Returns
`boolean`

### Examples


## isHTMLElement

> `isHTMLElement(item)`

Determines if the item is a HTML element.

### Arguments
1. item: `any` - the item

### Returns
`boolean`

### Examples


## isText

> `isText(item)`

Determines if the item is a text node.

### Arguments
1. item: `any` - the item

### Returns
`boolean`

### Examples


## off

> `off(options)(listener)(event)(item)`

Removes an event listener from the item.

### Arguments
1. options: `EventListenerOptions` - event listener options
2. listener: `Event => void` - the event listener
3. event: `string` - the event type
4. item: `Element | Text | Document | DocumentFragment | Window` - the item

### Returns
`Element | Text | Document | DocumentFragment | Window` - the item

### Examples


## on

> `on(options)(listener)(event)(item)`

Adds an event listener to the item.

### Arguments
1. options: `EventListenerOptions` - event listener options
2. listener: `Event => void` - the event listener
3. event: `string` - the event type
4. item: `Element | Text | Document | DocumentFragment | Window` - the item

### Returns
`Element | Text | Document | DocumentFragment | Window` - the item

### Examples


## parent

> `parent(item)`

Returns the parent element of the item.

### Arguments
1. item: `Element | Text | Document | DocumentFragment` - the item

### Returns
`Element | null` - the parent of the item

### Examples


## prepend

> `prepend(subject)(item)`

Prepends the subject as the first child of the item.

### Arguments

1. subject: `Element | Text | DocumentFragment | string` – the subject to prepend to the item

2. item: `Element | Text | Document | DocumentFragment` - the item 

### Returns
`Element | Text| Document | DocumentFragment` - the item

### Examples


## prependTo

> `prependTo(target)(item)`

Prepends the item as the first child of the target.

### Arguments
1. target: `Element | Document | DocumentFragment` – the target to prepend the item to

2. item: `Element | Text | DocumentFragment | string` - the item 

### Returns
`Element | Text | DocumentFragment | string` - the item

### Examples


## qs (alias: $)
> `qs(selector)`

Returns the first element matching the selector string. The result can then be passed to other peso functions as the last parameter.

### Arguments
1. selector (string) - the selector string to match

### Returns
The first element matched by the selector

### Examples


## qsa
> `qsa(selector)`

Returns an array containing all elements matching the selector string. The result can then be mapped through other peso functions. See TODO

### Arguments
1. selector (string) - the selector string to match

### Returns
An array containing all elements matched by the selector

### Examples


## remove

> `remove(item)`

Removes the item from the DOM.

### Arguments
1. item: `Element | Text` - the item

### Returns
`void`

### Examples


## removeAttr

> `removeAttr(attribute)(item)`

Removes the specified attribute from the item.

### Arguments
1. attribute: `string` - the attribute to remove
2. item: `Element` - the item

### Returns
`Element` - the item

### Examples


## removeClass

> `removeClass(className)(item)`

Removes the specified class name from the item.

### Arguments
1. className: `string` - the class name to remove
2. item: `Element` - the item

### Returns
`Element` - the item

### Examples


## removeData

> `removeData(key)(item)`

Removes a data-attribute of the item.

### Arguments
1. key: `string` - the data key to remove
2. item: `HTMLElement` - the item

### Returns
`HTMLElement` - the item

### Examples


## replace

> `replace(target)(item)`

Replaces the target with the item.

### Arguments
1. target: `Element | Text` - the target that will be replaced
2. item: `Element | Text | DocumentFragment | string` - the item

### Returns
`Element | Text | DocumentFragment` - the item

### Examples


## replaceWith

> `replaceWith(subject)(item)`

Replaces the item with the subject.

### Arguments
1. subject: `Element | Text | DocumentFragment | string` - the subject
2. item: `Element | Text` - the item that will be replaced

### Returns
`Element | Text` - the item that was replaced

### Examples


## setAttr

> `setAttr(attributes)(item)`

Sets one or more attributes of the item.

### Arguments
1. attributes: `{ [attribute: string]: string }` - an object containing the attribute names and values to set
2. item: `Element` - the item

### Returns
`Element` - the item

### Examples


## setData

> `setData(data)(item)`

Sets one or more data-attributes of the item.

### Arguments
1. data: `{ [key: string]: string }` - an object containing the data keys and values to set
2. item: `Element` - the item

### Returns
`Element` - the item

### Examples


## setStyle

> `setStyle(styles)(item)`

Sets one or more styles of the item.

### Arguments
1. styles: `{ [property: string]: string }` - an object containing the style properties and values to set
2. item: `Element` - the item

### Returns
`Element` - the item

### Examples


## text

> `text(content)`

Creates a text node with the specified content.

### Arguments
1. content: `string` - the text content

### Returns
`Text` - the created text node

### Examples


## toggleClass

> `toggleClass(className)(item)`

Toggles a class name of the item.

### Arguments
1. className: `string` - the class name to toggle
2. item: `Element` - the item

### Returns
`Element` - the item

### Examples


## unwrap

> `unwrap(itemOrCollection)`

Unwraps a collection or item. If the argument is iterable it unwraps and returns the first item. Otherwise it returns the item.

### Arguments
1. itemOrCollection: `any | any[]` - the collection or item to unwrap

### Returns
`any` - the unwrapped value

### Examples


## wrap

> `wrap(itemOrCollection)`

Wraps the item or collection in an array.

### Arguments
1. itemOrCollection: `any` - the collection or item to wrap

### Returns
`any[]` - the wrapped value

### Examples



# License
MIT License
