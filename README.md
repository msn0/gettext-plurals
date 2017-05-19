# gettext-plurals

This is an excerpt of [node-gettext](https://github.com/alexanderwallin/node-gettext)'s plural forms. Only Polish language is supported.

## Installation

```sh
npm i --save gettext-plurals
```

## Example 1

```js
const pl = require('gettext-plurals');

const cats = ['kot', 'koty', 'kotów'];

cats[pl(23)]; // 'koty' 
```

## Example 2

```js
import { pl } from 'gettext-plurals';

const cats = ['kot', 'koty', 'kotów'];

export default function ({ count }) {
    return <div> Mam { count } { cats[pl(count)] } </div>;
}
```
