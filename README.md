# babel typescript playground

_learning babel transforms and typescript._

`@babel/core` is the core library.
`@babel/cli` contains CLI tooling that consumes the core library.

```bash
yarn add -D @babel/core @babel/cli @babel/preset-env
yarn add @babel/polyfill
```

## Babel

Parse all the JavaScript files in the `src` directory, apply any transformations 
we have told it to, and output each file to the `lib` directory.

Transformations come in the form of plugins, which are small JavaScript programs 
that instruct Babel on how to carry out transformations to the code.

to use the arrow function transformation:
```bash
npx babel src/ --out-dir lib/ --plugins=@babel/plugin-transform-arrow-functions 
```

Babel also allows for presents, which are named sets of transformations:
```bash
npx babel src/ --out-dir lib/ --presets=@babel/preset-env 
```

Converts this ES2017:
```js
const fn = (value) => value;
```
into
```js
"use strict";

var fn = function fn(value) {
  return value;
};
```

## TypeScript

To handle typescript, add the `@babel/preset-typescript` plugin.
```bash
yarn add -D @babel/preset-typescript
```

Given a TypeScript function:
```TypeScript
const fn = (value : Number) : String => value.toString();
```

You'll need to specify the `.ts` extension to specify the TypeScript file:
```bash
$ yarn -s babel --extensions ".ts" example.ts
"use strict";

require("core-js/modules/es6.regexp.to-string");

var fn = function fn(value) {
  return value.toString();
};
```
