# is What? 🙉

```
npm i is-what
```

Very simple &amp; small JS type check functions. It's fully TypeScript supported!

**Motivation:** I built is-what because the existing solutions were all too complex.

### Functions

isString, isNumber, isBoolean, isObject, isFunction, isArray, isUndefined, isNull, isRegExp, isDate, isSymbol, isPrimitive, isType, getType

### Usage

is-what is really easy to use, and all functions above work just like you'd expect.

```js
import { isString, isType, getType } from 'is-what'

isString('') // returns true
isType('', String) // returns true
getType('') // returns 'String'
```

#### Useful number & date exception:

Checking for `isNumber` and `isDate` will return `false` if the payload is `NaN` or an invalid date. This is done intentionally and especially useful when you need to check if numbers or dates are correct in your functions!

```js
isNumber(NaN) // returns false
isDate(new Date('---- invalid date ----')) // returns false
```

### TypeScript usage example:

```TypeScript
// is-what makes TypeScript know the type during if statements:
function fn (payload: string | number): number {
  if (isNumber(payload)) {
    // ↑ TypeScript already knows payload is a number here!
    return payload
  }
}
```

One other useful function especially for TypeScript is `isObjectLike`:

```TypeScript
function isObjectLike<T extends object> (payload: any): payload is T {
  return isObject(payload)
}
// Eg. check if it's an object and has the `id` prop:
if (isObjectLike<{id: any}>(payload)) {
  return payload.id
}
// with regular isObject() it will give an error that the prop `id` does not exist on the object.
```

### Source code

It's litterally just these functions:

```js
function getType (payload) {
  return Object.prototype.toString.call(payload).slice(8, -1)
}
function isUndefined (payload) {
  return getType(payload) === 'Undefined'
}
function isString (payload) {
  return getType(payload) === 'String'
}
function isObject (payload) {
  return getType(payload) === 'Object'
}
// etc...
```

See the full source code [here](https://github.com/mesqueeb/is-what/blob/master/src/index.ts).

## Tests

```
npm run test
```
